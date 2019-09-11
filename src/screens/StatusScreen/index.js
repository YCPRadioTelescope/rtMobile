import {Image, Text, TouchableHighlight, View,Animate} from 'react-native';
import React from 'react';
import styles from './styles';

var statuslightstyle = styles.statuslight;

class StatusScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style= {styles.header}>Status</Text>

        <View style={statuslightstyle} />
        <Text style= {styles.sensorlistheader}>Sensors</Text>
        {/* Start Sensor List */}
        <View style={styles.sensorlistcontainer}>
            <TouchableHighlight onPress={() => {this.props.navigation.navigate('Sensor')}}>
                <Text>Test1</Text>
            </TouchableHighlight>
            <Text>Test</Text>
            <Text>Test2</Text>
            <Text>Test3</Text>
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
