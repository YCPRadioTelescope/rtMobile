import {Image, Text, TouchableHighlight, View, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import { Divider } from 'react-native-elements';



const Detail = ({
                    key,
                    detail,
                    name,
                    style
                })=>(
    <View>
        <View style = {{flexDirection: 'row',justifyContent: 'space-between',}}>
            <Text style = {{alignSelf: 'flex-start', paddingLeft: '5%'}}>{name}</Text>
            <Image
                source={require("../../../assets/images/meduimgreenstatus.png")}
                style = {style}
            />
        </View>
        <Divider style={styles.sectionDivider}/>
    </View>
);

class SensorScreen extends React.Component {

  render() {
    const { navigation } = this.props;
    const details = navigation.getParam('details', 'fallback_detail')
    return (
        <ScrollView>
            <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                <Image
                    source={require("../../../assets/images/back.png")}
                />
            </TouchableHighlight>
            <View style={{marginTop: '10%', alignItems: 'center',}}>
                <Text style = {styles.header}> {navigation.getParam('sensorname', 'Sensor')}</Text>

            </View>
            <Divider style={styles.sectionDivider}/>
            <View style={styles.container}>
                <View style={styles.detailslistcontainer}>
                    <TouchableHighlight onPress={() => {}}>
                        <Detail name = {navigation.getParam('sensorname', 'Sensor')} detail={details}
                        style = {styles.statusLightStyle}
                        />
                    </TouchableHighlight>
                </View>
            </View>
            <TouchableHighlight onPress={() => {}} style={styles.button}>
                <View>
                    <Text style={{color: 'white'}}> Add New Override </Text>
                </View>
            </TouchableHighlight>
        </ScrollView>
    );
  }
}

export default SensorScreen;
