import {
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator, StatusBar
} from 'react-native';
import React from 'react';
import styles from './styles';
import { firebase } from '@react-native-firebase/messaging';
import {getWeatherData} from "../../actions/WeatherActions";
import {getPendingUsers} from "../../actions/getPendingUsersAction";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getSensorData} from "../../actions/SensorActions";
import CoordModal from "../../components/coordModal"
import ScriptsModal from '../../components/scriptsModal/scriptsModal';
import config from '../../../config';
import TcpSocket from 'react-native-tcp-socket';
import {getAppointment} from '../../actions/getAppointmentAction';
import {getUsers} from '../../actions/getUsersAction';
import PushNotification from "react-native-push-notification";

class HomeScreen extends React.Component {

  state={
    azimuth: this.props.navigation.getParam("azimuth", 45),
    elevation: this.props.navigation.getParam("elevation", 45),
    isLoading: true,
    isLoading2: true,
    isLoading3: true,
    isLoading4: true,
    isLoading5: true,
    userList:[],
    currentUser:"",
    windSpeed: '',
    windDirection: '',
    temperature: '',
    users: 0,
    sensorArray:[],
    pendingUsers: [],
    modalVisible: false,
    modal2Visible: false,
    token: '',
  };

  async getData() {
    await this.props.getPendingUsers().then(response => {
      //console.log('pendinguser in home', response);
      this.setState({users: response.pendingUser.data.length || 0});
      this.setState({pendingUsers: response.pendingUser.data});
      this.setState({isLoading2: false});
    });
    await this.props.getWeatherData().then(response => {
      //console.log('weather in home', response);
      this.setState({windSpeed: this.props.weather[0].detail});
      this.setState({windDirection: this.props.weather[1].detail});
      this.setState({temperature: this.props.weather[2].detail});
      this.setState({isLoading: false});
    });
    await this.props.getWeatherData().then(response => {
      //console.log('weather in home', response);
      this.setState({windSpeed: this.props.weather[0].detail});
      this.setState({windDirection: this.props.weather[1].detail});
      this.setState({temperature: this.props.weather[2].detail});
      this.setState({isLoading: false});
    });
    await this.props.getSensorData().then(response => {
      //console.log('sensor in home', response);
      this.setState({sensorArray: this.props.sensor});
      this.setState({isLoading3: false});
      //set asmuth
      if (this.state.sensorArray[2].value != null) {
        let azimuth = this.props.navigation.getParam("azimuth", this.state.sensorArray[2].value);
        this.setState({azimuth: azimuth});
      } else {
        let azimuth = this.props.navigation.getParam("azimuth", 90);
        this.setState({azimuth: azimuth});
      }
      //set elevation
      if (this.state.sensorArray[3].value != null) {
        let elevation = this.props.navigation.getParam("elevation", this.state.sensorArray[3].value);
        this.setState({elevation: elevation});
      } else {
        let elevation = this.props.navigation.getParam("elevation", 90);
        this.setState({elevation: elevation});
      }
    });
    await this.props.getUsers().then(response => {
      //console.log('user response: ', response);
      this.setState({userList: response.user.data});
      this.setState({isLoading4: false});
    });
    await this.props.getAppointment().then(response => {
      //console.log('appt. response: ', response);
      let appointment = response.appointment;

      //get date/time closest to today
      var sortedData = appointment.data.sort(function(a, b) {
        return new Date(b.start_time).getTime() - new Date(a.start_time).getTime()
      });

      console.log(sortedData[0]);
      this.setState({currentUser:  this.parseName(sortedData[0].user_id)});



      this.setState({isLoading5: false});
    });
  }
   async getToken () {
    const fcmToken = await firebase.messaging().getToken();
//    console.log('token', fcmToken);
    const hasPermission = await firebase.messaging().hasPermission();
    //console.log('has permission', hasPermission);

    const unsubscribe = firebase.messaging().onMessage(async (remoteMessage) => {
      // console.log('FCM Message Data:', remoteMessage.data);
    });

// Unsubscribe from further message events
     unsubscribe();
  }
  componentDidMount() {
    if (Platform.OS === 'android') {
      this.getToken();

      PushNotification.configure({
        // (optional) Called when Token is generated (iOS and Android)
        onRegister: function(token) {
          console.log("TOKEN:", token);
        },

        // (required) Called when a remote or local notification is opened or received
        onNotification: function(notification) {
          console.log("NOTIFICATION:", notification);

          // process the notification

          // required on iOS only (see fetchCompletionHandler docs: https://github.com/react-native-community/react-native-push-notification-ios)
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        },

        // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
        senderID: "40573680400",

        // IOS ONLY (optional): default: all - Permissions to register.
        permissions: {
          alert: true,
          badge: true,
          sound: true
        },

        // Should the initial notification be popped automatically
        // default: true
        popInitialNotification: true,

        /**
         * (optional) default: true
         * - Specified if permissions (ios) and token (android and ios) will requested or not,
         * - if not, you must call PushNotificationsHandler.requestPermissions() later
         */
        requestPermissions: true
      });

    }

    this.focusListener = this.props.navigation.addListener("didFocus", () => {
      let azimuth = this.props.navigation.getParam("azimuth", 90);
      let elevation = this.props.navigation.getParam("elevation", 90);
      this.setState({azimuth: azimuth});
      this.setState({elevation: elevation});
      this.getData();
    });
    this.getData();
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  nav = ( ) => {
    this.props.navigation.navigate("Dpad", {"azimuth": this.state.azimuth, "elevation": this.state.elevation});
  };

  changeModal = () => {
    this.setState({modalVisible: true});
  }

  toggleScriptsModal = () => {
    this.setState({modal2Visible: true});
  }

  parseName=(userID)=>{
    for(let i=0; i< this.props.user.length; i++){
      if(this.props.user[i].id === userID){
        return this.props.user[i].first_name+' '+this.props.user[i].last_name;
      }
    }
    return "Anonymous user";
  }

  stop(){
    //console.log('Selection made');
    let options = {
      host: config.Host,
      port: config.Port,
      reuseAddress: true,
    };

    let client = TcpSocket.createConnection(options, (address) => {
      //console.log(address);
      //console.log('Connection made! Sending ', 'SCRIPT: STOP'");
      // Write on the socket
      client.write('SCRIPT: STOP \n');
    });

    client.on('data', (data) => {
      //console.log('Received: ', data.toString());
      client.destroy(); // kill client after server's response
    });

    client.on('error', (error)=>{
      console.log('Error: ', error);
    });

    client.on('close', ()=>{
      //console.log('Connection closed!');
    });

    // Close socket
    this.props.close();
  };

  dpad = () => {
    //this.props.navigation.navigate("TempNav");
    Alert.alert(
      'Wait',
      'Would you Like to move the telescope manually or enter coordinates?',
      [
        {
          text: 'Coordinates',
          onPress: this.changeModal,
        },
        {
          text: 'Move',
          onPress: this.nav
        },
      ],
      {cancelable: false},
    );
  };

  stop = () => {
    Alert.alert(
      'Wait',
      'Are you sure you want to stop the telescope?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => this.stop()},
      ],
      {cancelable: false},
    );
  };

  script = () => {
    Alert.alert(
      'Wait',
      'Are you sure you want to run a script on the telescope?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: this.toggleScriptsModal,
        },
      ],
      {cancelable: false},
    );
  };

    getStatusLightColor = () =>{
        let count = 0;
        let numYellow = 0;
        while(count < this.state.sensorArray.length){
            //if at least 1 sensor is red set status to Red
            if(this.state.sensorArray[count].status === 0 && !this.state.sensorArray[count].override){
                return require("../../../assets/images/redStatus.png");
            }
            //check if there are any yellows
            else if(this.state.sensorArray[count].status === 1 && !this.state.sensorArray[count].override){
                numYellow ++;
            }
            count++;
        }
        //if there are any yellow sensors set the status to yellow
        if(numYellow > 0){
            return require("../../../assets/images/mediumyellowstatus.png");
        }
        //if there are no red or yellow sensors return green
        else{
            return require("../../../assets/images/meduimgreenstatus.png");
        }

    }

  render() {
   /* if (this.state.isLoading === true || this.state.isLoading2 === true || this.state.isLoading3 === true) {
      //console.log("Loading data from database");
      return (
          <View style={styles.loading}>
            <ActivityIndicator/>
            <StatusBar barStyle="default"/>
          </View>
      )
    }
    if(this.state.isLoading === false && this.state.isLoading2 === false && this.state.isLoading3 === false){
    */
      //this holds the image for the status light. setting the image source to this.getStatusLightColor directly does not work
        let statusLightColor = this.getStatusLightColor();
      return (
          <View style={styles.container}>
            <View style={styles.navBar}>
              <TouchableHighlight style={styles.navContainer} onPress={() => this.props.navigation.navigate("Status")}>
                <Text style={styles.navTitle}>Status: </Text>
              </TouchableHighlight>
              <Image
                  source={statusLightColor}
                  style={styles.mainStatusLight}/>
            </View>
            <View>
              <Image
                  source={require("../../../assets/images/footage.jpg")} style={styles.footageScreen}/>
              <TouchableHighlight onPress={() => this.props.navigation.navigate("Weather")} style={{position: 'absolute', top: 10, left: 5}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                     Temperature: {this.state.temperature}
                </Text>
              </TouchableHighlight>
              <TouchableHighlight style={{position: 'absolute', top: 10, right: 5}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>Azimuth: {this.state.azimuth}</Text>
              </TouchableHighlight>
              <TouchableHighlight style={{position: 'absolute', top: 30, right: 5}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>Elevation: {this.state.elevation}</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Weather')} style={{position: 'absolute', bottom: 10, left: 5} }>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                    Wind: {this.state.windSpeed} mph {this.state.windDirection}
                </Text>
              </TouchableHighlight>
              <TouchableHighlight   onPress={() => this.props.navigation.navigate('Appointment')} style={{position: 'absolute', bottom: 10, right: 5}}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Appt by: {this.state.currentUser}</Text>
              </TouchableHighlight>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableHighlight onPress={this.stop} style={styles.button}>
                <View>
                  <Text> Stop Telescope </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.props.navigation.navigate("ApprovalDashboard", {pendingUsers: this.state.pendingUsers})}
                                  style={styles.button}>
                <View>
                  <Text> Approve Users </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.script} style={styles.button}>
                <View>
                  <Text> Run script </Text>
                </View>
              </TouchableHighlight>
              {this.state.users > 0 && (
              <Image
                  source={require("../../../assets/images/redStatus.png")}
                  style={styles.users}
              />
              )}
              {this.state.users > 0 && (
                  <Text style={styles.userNum}>{this.state.users}</Text>
              )}
            </View>
            <View style={styles.dpad}>
              <TouchableOpacity onPress={this.dpad}>
                <Image
                    source={require("../../../assets/images/dpad3.png")}
                    style={styles.dpadSize}
                />
              </TouchableOpacity>
            </View>
            <CoordModal visible={this.state.modalVisible} close={() => this.setState({modalVisible: false})}/>

            <ScriptsModal visible={this.state.modal2Visible} close={() => this.setState({modal2Visible: false})}/>
          </View>
      );
    }
  //}
}
const mapStateToProps = state => {
  const { weather, users, sensor, pendingUsers, appointment, user } = state;
  /*console.log("weather.weather is:",weather.weather.weather);
  console.log('users bottom -> ', users);*/

  return {
    pendingUsers: pendingUsers,
    weather: weather.weather.weather,
    sensor: sensor.sensor.sensor,
    appointment: appointment.appointment.appointment,
    user: user.user.user.data,
    errorResponse: weather.errorResponse,
    errorMessage: weather.errorMessage
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
          getWeatherData,
          getPendingUsers,
          getSensorData,
          getAppointment,
          getUsers,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);

