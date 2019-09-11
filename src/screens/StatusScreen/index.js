import {Image, Text, TouchableHighlight, View,Animate} from 'react-native';
import React from 'react';
import styles from './styles';



class StatusScreen extends React.Component {

constructor() {
   super();
 }

let statuslightstyle {};

swapstatuscolor () {
    console.log('Yellow Pressed');
    statuslightstyle = {};
}

  render() {
    return (
      <View style={styles.container}>
        <Text style= {styles.header}>Status</Text>

        <View style={statuslightstyle} />
        <Text style= {styles.sensorlistheader}>Sensors</Text>
        <View style={styles.sensorlistcontainer}>
            <TouchableHighlight onPress={() => {this.props.navigation.navigate('Sensor')}}>
                <Text>Test1</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {this.props.navigation.navigate('Sensor')}}>
                <Text>Test2</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {this.props.navigation.navigate('Sensor')}}>
                <Text>Test3</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.swapstatuscolor}>
                <Text>Yellow</Text>
            </TouchableHighlight>
        </View>
        {/*Back Arrow*/}
        <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
         <Image
           source={require("../../../assets/images/back.png")}
         />
        </TouchableHighlight>
      </View>
    );
  }
}

export default StatusScreen;
