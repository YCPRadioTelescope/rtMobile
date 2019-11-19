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
import CoordModal from "../../components/coordModal"

class HomeScreen extends React.Component {

  state={
    azimuth: this.props.navigation.getParam("azimuth", 45),
    elevation: this.props.navigation.getParam("elevation", 45),
    isLoading: true,
    isLoading2: true,
    windSpeed: '',
    windDirection: '',
    temperature: '',
    users: 0,
    modalVisible: false,
  };

  async getData(){
    await this.props.getUsers().then(response => {
        //console.log('response ===', response);
        //console.log('users props -> ', this.props.users);
        this.setState({users: response.user.data.length || 0});
        this.setState({isLoading2: false});
    });
    await this.props.getWeatherData().then(response => {
        this.setState({windSpeed: this.props.weather[0].detail});
        this.setState({windDirection: this.props.weather[1].detail});
        this.setState({temperature: this.props.weather[2].detail});
        this.setState({isLoading: false});
    })
  }

   async getToken () {
    const fcmToken = await firebase.messaging().getToken();
    //console.log('token', fcmToken);
    const hasPermission = await firebase.messaging().hasPermission();
    //console.log('has permission', hasPermission);

    const unsubscribe = firebase.messaging().onMessage(async (remoteMessage) => {
       //console.log('FCM Message Data:', remoteMessage.data);
    });

// Unsubscribe from further message events
     unsubscribe();
  }
  componentDidMount() {

    if (Platform.OS === 'android') {
      this.getToken();
    }

    this.focusListener = this.props.navigation.addListener("didFocus", () => {
      //console.log('az in h0me', this.props.navigation.getParam("azimuth"));
      let azimuth = this.props.navigation.getParam("azimuth", 45);
      let elevation = this.props.navigation.getParam("elevation", 45);
      this.setState({azimuth: azimuth});
      this.setState({elevation: elevation});

    });
    this.getData();
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  nav = ( ) => {
    /*console.log('inNav');
    console.log('az', this.state.azimuth);*/
    this.props.navigation.navigate("Dpad", {"azimuth": this.state.azimuth, "elevation": this.state.elevation});
  };

  changeModal = () => {
    this.setState({modalVisible: true});
  }

  dpad = () => {
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
          onPress: this.nav},
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

  render() {
    /*if (this.state.isLoading === true || this.state.isLoading2 === true) {
      //console.log("Loading data from database");
      return (
          <View style={styles.loading}>
            <ActivityIndicator/>
            <StatusBar barStyle="default"/>
          </View>
      )
    }
    if(this.state.isLoading === false && this.state.isLoading2 === false){*/
      return (
          <View style={styles.container}>
            <View style={styles.navBar}>
              <TouchableHighlight style={styles.navContainer} onPress={() => this.props.navigation.navigate("Status")}>
                <Text style={styles.navTitle}>Status: </Text>
              </TouchableHighlight>
              <Image
                  source={require("../../../assets/images/redStatus.png")}
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
            <CoordModal visible={this.state.modalVisible} close={() => this.setState({modalVisible: false})}/>
          </View>
      );
    }
  //}
}
const mapStateToProps = state => {
  const { weather, users } = state;
  //console.log("Getting weather = state in MapStateToProps",weather);
  console.log("weather.weather is:",weather.weather.weather);
  console.log('users bottom -> ', users);

  return {
    users: users,
    weather: weather.weather.weather,
    errorResponse: weather.errorResponse,
    errorMessage: weather.errorMessage
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
          getWeatherData,
          getUsers,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);

