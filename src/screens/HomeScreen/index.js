import {Dimensions, Image, Text, TouchableHighlight, TouchableOpacity, View, Alert} from 'react-native';
import React from 'react';
import styles from './styles';
import ScrollElements from "../../components/scrollView/scrollView";



class HomeScreen extends React.Component {

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
        {text: 'Yes', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <Text style={styles.navTitle}>Status: </Text>
                <Image
                    source={require("../../../assets/images/redStatus.png")}
                    style={styles.mainStatusLight}/>
            </View>
            <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                <Image
                    source={require("../../../assets/images/back.png")}
                />
            </TouchableHighlight>
          <View>
            <Image
                source={require("../../../assets/images/footage.jpg")}  style={styles.footageScreen}/>
            <TouchableHighlight style={{position: 'absolute', top: 10, left: 5}}>
              <Text style={{fontWeight:'bold', fontSize: 18}}>Temperature: 67</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{position: 'absolute', top: 10, right: 5}}>
              <Text style={{fontWeight:'bold', fontSize: 18}}>Ra Dec: 17</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{position: 'absolute', bottom: 10, left: 5}}>
              <Text style={{color: 'white', fontWeight:'bold', fontSize: 18}}>Wind: 3 mph NNW</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{position: 'absolute', bottom: 10, right: 5}}>
              <Text style={{color: 'white', fontWeight:'bold', fontSize: 18}}>Appt by: Cody Spath</Text>
            </TouchableHighlight>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableHighlight onPress={this.login} style={styles.button}>
              <View>
                <Text> Stop Telescope </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.login} style={styles.button}>
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
