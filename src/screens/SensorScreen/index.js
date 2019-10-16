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
        <View style = {{flexDirection: 'row'}}>
            <Text style = {{alignSelf: 'flex-start', paddingLeft: '5%'}}>{name}</Text>
            <Text style = {{alignSelf: 'flex-end', paddingLeft: '55%'}}>{detail}</Text>
        </View>
        <Divider style={styles.sectionDivider}/>
    </View>
);

class SensorScreen extends React.Component {

  render() {
    const { navigation } = this.props;
    const details = navigation.getParam('details', [{name: 'fallback', detail: 'falldetail'}])
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
            <View style={styles.container}>
                <View style={styles.detailslistcontainer}>
                    {details.map( detailsInfo => {
                        return (
                        <TouchableHighlight onPress={() => {}}>
                            <Detail name = {detailsInfo.name} detail={detailsInfo.detail}/>
                        </TouchableHighlight>
                        );
                    })}
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
