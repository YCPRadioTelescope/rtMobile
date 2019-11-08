import {
  Dimensions,
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
import ScrollElements from "../../components/scrollView/scrollView";
import { firebase } from '@react-native-firebase/messaging';

import {getWeatherData} from "../StatusScreen/WeatherActions";
import {bindActionCreators} from "redux";
import {getSensorData} from "../SensorScreen/SensorActions";
import {connect} from "react-redux";

const windspeed = 0;
const winddirection = 1;
const temperature = 2;

class HomeScreen extends React.Component {

  async getData(){
    await this.props.getWeatherData().then(response => {
      this.setState({isLoading: false});

    })
  }


  state={
    azimuth: this.props.navigation.getParam("azimuth", 45),
    elevation: this.props.navigation.getParam("elevation", 45),
    isLoading: true,
    windSpeed: "initial",
    windDirection: "initial",
    temperature: "initial",
  };

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

    if (Platform.OS === 'android') {
      this.getToken();
    }

    this.focusListener = this.props.navigation.addListener("didFocus", () => {
      console.log('az in h0me', this.props.navigation.getParam("azimuth"));
      let azimuth = this.props.navigation.getParam("azimuth", 45);
      let elevation = this.props.navigation.getParam("elevation", 45);
      this.setState({azimuth: azimuth});
      this.setState({elevation: elevation});

    });
    this.getData();
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
  updateState = () =>{
    /*when navigating to Weather (but not ApprovalDashboard)
    for some reason render() is called again and that can cause
    the app to pull data from props.weather, which would now be
    undefined and cause a crash. This function fixes that
    and should be called before return
     */
    console.log("Updating weather state");
    if(this.props.weather != undefined){
      if(this.props.weather[temperature].detail != undefined){
        this.state.temperature =this.props.weather[temperature].detail;
      }
      if(this.props.weather[windspeed].detail != undefined){
        this.state.windSpeed = this.props.weather[windspeed].detail;
      }
      if(this.props.weather[winddirection].detail != undefined){
        this.state.windDirection = this.props.weather[winddirection].detail;
      }
    }


  };

  render() {
    if (this.state.isLoading) {
      console.log("Loading data from database");
      return (
          <View style={styles.loading}>
            <ActivityIndicator/>
            <StatusBar barStyle="default"/>
          </View>
      )
    } else {
      console.log("Done loading: updateing weather variables then rendering page");
      this.updateState();
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
              <TouchableHighlight style={{position: 'absolute', bottom: 10, right: 5}}>
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
              <Image
                  source={require("../../../assets/images/redStatus.png")}
                  style={styles.users}
              />
              <Text style={styles.userNum}>3</Text>
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
  const { weather } = state;
  console.log("Getting weather = state in MapStateToProps",weather);
    console.log("weather.weather is:",weather.weather.weather);

  return {
    weather: weather.weather.weather,
    errorResponse: weather.errorResponse,
    errorMessage: weather.errorMessage
  };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
          getWeatherData,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);

