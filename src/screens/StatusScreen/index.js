import {Image, Text, TouchableHighlight, View,Animate} from 'react-native';
import React from 'react';
import styles from './styles';



class StatusScreen extends React.Component {

constructor() {
   super();
   this.state = {
     statusLightStyle: {
       width: 50,
       height: 50,
       backgroundColor: 'green',
       borderWidth: 10,
       borderColor: 'transparent',
       borderRadius: 30,
       top: '9.5%',
       right: '25%',
       position: 'absolute',
     },
   }
 }

  swapstatuscolor = () => {
    console.log('Yellow Pressed');
    this.setState({statusLightStyle: {
        width: 50,
        height: 50,
        backgroundColor: 'yellow',
        borderWidth: 10,
        borderColor: 'transparent',
        borderRadius: 30,
        top: '9.5%',
        right: '25%',
        position: 'absolute'
      }})
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style= {styles.header}>Status</Text>
        <View style={this.state.statusLightStyle} />
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
