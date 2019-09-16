import {Image, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';
import { Divider } from 'react-native-elements';



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
       top: '15.5%',
       right: '25%',
       position: 'absolute',
     },
     sensorArr: [
       {
         key: 1,
         temp: 82,
         text: "text1",
         status: "0",
       },
       {
         key: 2,
         temp: 40,
         text: "test2",
         status: "0",
       },
       {
         key: 3,
         temp: 50,
         text: "test3",
         status: "0",
       },
     ],
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
        top: '15.5%',
        right: '25%',
        position: 'absolute'
      }})
  };

  render() {
    return (
      <View>
        <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
          <Image
            source={require("../../../assets/images/back.png")}
          />
        </TouchableHighlight>
        <View style={{marginTop: '20%', alignItems: 'center'}}>
          <Text>Sensors</Text>
        </View>
          <View style={this.state.statusLightStyle} />
        <Divider style={styles.sectionDivider}/>
        <View style={styles.container}>
          <Text style= {styles.sensorlistheader}>Sensors</Text>
          <View style={styles.sensorlistcontainer}>
              {this.state.sensorArr.map( sensorInfo => {
                  return (
                      <TouchableHighlight onPress={() => {this.props.navigation.navigate('Sensor')}}>
                      <Text>{sensorInfo.text}</Text>
                      </TouchableHighlight>
                  );
              })}
          </View>
          <View style={{marginTop: '50%'}}>
           <TouchableHighlight onPress={this.swapstatuscolor}>
                  <Text>Yellow</Text>
           </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

export default StatusScreen;
