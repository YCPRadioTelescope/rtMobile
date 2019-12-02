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
import {getUsers} from "../../actions/getUsersAction";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getSensorData} from "../SensorScreen/SensorActions";

class HomeScreen extends React.Component {

  state={
    azimuth: this.props.navigation.getParam("azimuth", 45),
    elevation: this.props.navigation.getParam("elevation", 45),
    isLoading: true,
    isLoading2: true,
    isLoading3: true,
    windSpeed: '',
    windDirection: '',
    temperature: '',
    users: 0,
    sensorArray:[],

  };

  async getData(){
    await this.props.getUsers().then(response => {
      console.log('response ===', response)
      console.log('users props -> ', this.props.users);
      this.setState({users: response.user.data.length});
      this.setState({isLoading2: false});
    })
    await this.props.getWeatherData().then(response => {
      this.setState({windSpeed: this.props.weather[0].detail});
      this.setState({windDirection: this.props.weather[1].detail});
      this.setState({temperature: this.props.weather[2].detail});
      this.setState({isLoading: false});
    })
      await this.props.getSensorData().then(response => {
          this.setState({sensorArray: this.props.sensor})
          this.setState({isLoading3: false});
      })
  }

   async getToken () {
    const fcmToken = await firebase.messaging().getToken();
    console.log('token', fcmToken);
    const hasPermission = await firebase.messaging().hasPermission();
    console.log('has permission', hasPermission);

    const unsubscribe = firebase.messaging().onMessage(async (remoteMessage) => {
       console.log('FCM Message Data:', remoteMessage.data);
    });

// Unsubscribe from further message events
     unsubscribe();
  }
  componentDidMount() {
      this.getData();

      if (Platform.OS === 'android') {
      this.getToken();
    }

    this.focusListener = this.props.navigation.addListener("didFocus", () => {
      console.log('az in h0me', this.props.navigation.getParam("azimuth"));
      let azimuth = this.props.navigation.getParam("azimuth", 45);
      let elevation = this.props.navigation.getParam("elevation", 45);
      this.setState({azimuth: azimuth});
      this.setState({elevation: elevation});
      this.getData();
    });
    /*this.focusListener = this.props.navigation.addListener("didBlur", () => {
      this.setState({isLoading: true})
    });*/
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  nav = ( ) => {
    console.log('inNav');
    console.log('az', this.state.azimuth);
    this.props.navigation.navigate("Dpad", {"azimuth": this.state.azimuth, "elevation": this.state.elevation});
  };

  dpad = () => {
    Alert.alert(
      'Wait',
      'Are you sure you want to move the telescope?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: this.nav},
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
        {text: 'Yes', onPress: () => console.log('yes Pressed')},
      ],
      {cancelable: false},
    );
  };

    getStatusLightColor = () =>{
        let count = 0;
        let numYellow = 0;
        while(count < this.state.sensorArray.length){
            //if at least 1 sensor is red set status to Red
            if(this.state.sensorArray[count].details == 0 && !this.state.sensorArray[count].override){
                return require("../../../assets/images/redStatus.png");
            }
            //check if there are any yellows
            else if(this.state.sensorArray[count].details == 1 && !this.state.sensorArray[count].override){
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
    if (this.state.isLoading === true || this.state.isLoading2 === true || this.state.isLoading3 === true) {
      //console.log("Loading data from database");
      return (
          <View style={styles.loading}>
            <ActivityIndicator/>
            <StatusBar barStyle="default"/>
          </View>
      )
    }
    if(this.state.isLoading === false && this.state.isLoading2 === false && this.state.isLoading3 === false){
      //console.log('windddddd', this.state.windSpeed);
      //console.log("Done loading: updateing weather variables then rendering page");
      //this.updateState();
      /*console.log('user length', this.state.users);
      console.log('isloading', this.state.isLoading);
      console.log('loading 2', this.state.isLoading2);*/
      //this holds the image for the status light. setting the image source to this.getStatusLightColor directly does not work
        let statusLightColor = this.getStatusLightColor()
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
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Appt by: Cody Spath</Text>
              </TouchableHighlight>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableHighlight onPress={this.stop} style={styles.button}>
                <View>
                  <Text> Stop Telescope </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.props.navigation.navigate("ApprovalDashboard")}
                                  style={styles.button}>
                <View>
                  <Text> Approve Users </Text>
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

          </View>
      );
    }
  }
}
const mapStateToProps = state => {
  const { weather, users,sensor } = state;
  //console.log("Getting weather = state in MapStateToProps",weather);
  console.log("weather.weather is:",weather.weather.weather);
  console.log('users bottom -> ', users);

  return {
    users: users,
    weather: weather.weather.weather,
    sensor: sensor.sensor.sensor,
    errorResponse: weather.errorResponse,
    errorMessage: weather.errorMessage
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
          getWeatherData,
          getUsers,
          getSensorData,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);

