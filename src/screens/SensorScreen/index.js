import {Image, Text, TouchableHighlight, View, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import { Divider } from 'react-native-elements';

class SensorScreen extends React.Component {

  render() {
    const { navigation } = this.props;
    return (
        <ScrollView>
            <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                <Image
                    source={require("../../../assets/images/back.png")}
                />
            </TouchableHighlight>
            <View style={{marginTop: '10%', alignItems: 'center'}}>
                <Text style = {styles.header}> {navigation.getParam('sensorname', 'Sensor')}</Text>
                <Image
                    source={require("../../../assets/images/largegreenstatus.png")}
                    style={styles.statusLightStyle}
                />
            </View>
            <Divider style={styles.sectionDivider}/>
        </ScrollView>
    );
  }
}

export default SensorScreen;
