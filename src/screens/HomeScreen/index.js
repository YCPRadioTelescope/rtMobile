import {Dimensions, Image, Text, TouchableHighlight, TouchableOpacity, View, Alert} from 'react-native';
import React from 'react';
import styles from './styles';
import ScrollElements from "../../components/scrollView/scrollView";



class HomeScreen extends React.Component {


  state={
    azimuth: this.props.navigation.getParam("azimuth", 45),
    elevation: this.props.navigation.getParam("elevation", 45),
  };

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener("didFocus", () => {
      console.log('az in h0me', this.props.navigation.getParam("azimuth"));
      let azimuth = this.props.navigation.getParam("azimuth", 45);
      let elevation = this.props.navigation.getParam("elevation", 45);
      this.setState({azimuth: azimuth});
      this.setState({elevation: elevation});
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

  render() {
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
                source={require("../../../assets/images/footage.jpg")}  style={styles.footageScreen}/>
            <TouchableHighlight style={{position: 'absolute', top: 10, left: 5}}>
              <Text style={{fontWeight:'bold', fontSize: 18}}>Temperature: 67</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{position: 'absolute', top: 10, right: 5}}>
              <Text style={{fontWeight:'bold', fontSize: 18}}>Azimuth: {this.state.azimuth}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{position: 'absolute', top: 30, right: 5}}>
              <Text style={{fontWeight:'bold', fontSize: 18}}>Elevation: {this.state.elevation}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{position: 'absolute', bottom: 10, left: 5}}>
              <Text style={{color: 'white', fontWeight:'bold', fontSize: 18}}>Wind: 3 mph NNW</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{position: 'absolute', bottom: 10, right: 5}}>
              <Text style={{color: 'white', fontWeight:'bold', fontSize: 18}}>Appt by: Cody Spath</Text>
            </TouchableHighlight>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableHighlight onPress={this.stop} style={styles.button}>
              <View>
                <Text> Stop Telescope </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("ApprovalDashboard")} style={styles.button}>
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

export default HomeScreen;
