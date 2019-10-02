import {Image, Text, TouchableHighlight, View, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import { Divider } from 'react-native-elements';

//component to render each of the sensors in sensorlistcontainer
const Sensor = ({
                    key,
                    temp,
                    name,
                    style
                })=>(
    <View>
        <View style = {{flexDirection: 'row'}}>
            <Text style = {{alignSelf: 'flex-start', paddingLeft: '5%'}}>{name}</Text>
            <Image
                source={require("../../../assets/images/meduimgreenstatus.png")}
                style = {style}
            />
        </View>
        <Divider style={styles.sectionDivider}/>
    </View>


);

class StatusScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            //this is the array that holds information the the sensor components
            sensorArr: [
                {
                    key: 0,
                    temp: 82,
                    name: "text0",
                    status: "0",
                },
                {
                    key: 1,
                    temp: 40,
                    name: "test1",
                    status: "0",
                },
                {
                    key: 2,
                    temp: 50,
                    name: "test2",
                    status: "0",
                },
                {
                    key: 3,
                    temp: 50,
                    name: "test3",
                    status: "0",
                },
                {
                    key: 4,
                    temp: 50,
                    name: "test4",
                    status: "0",
                },
                {
                    key: 5,
                    temp: 50,
                    name: "test5",
                    status: "0",
                },
            ],
        }
    }

    handlepress = ()=>{
        this.props.navigation.navigate('Sensor');
    }

    swapstatuscolor = () => {
        console.log('Yellow Pressed');
        this.setState({statusLightStyle: {
                width: 50,
                height: 50,
                top: '15.0%',
                right: '22.5%',
                position: 'absolute',
            }})
    };
    drawSensorStatus = () =>{
        return 0;
    };


    render() {
        return (
            <ScrollView>
                <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                    <Image
                        source={require("../../../assets/images/back.png")}
                    />
                </TouchableHighlight>
                <View style={{marginTop: '20%', alignItems: 'center'}}>
                    <Text style = {styles.header}>Status</Text>
                </View>
                <Image
                    source={require("../../../assets/images/largegreenstatus.png")}
                    style={styles.statusLightStyle}
                />
                <Divider style={styles.sectionDivider}/>
                <Text style= {styles.sensorlistheader}>Sensors</Text>
                <Divider style={styles.listheaderDivider}/>
                <View style={styles.container}>
                    <View style={styles.sensorlistcontainer}>
                        {this.state.sensorArr.map( sensorInfo => {
                            return (
                                <TouchableHighlight onPress={() => {this.props.navigation.navigate('Sensor')}}>
                                    <Sensor name = {sensorInfo.name} temp={sensorInfo.temp}
                                            style={styles.sensorLightStyle}/>
                                </TouchableHighlight>
                            );
                        })}
                    </View>
                </View>
            </ScrollView>
        );
    }
}



export default StatusScreen;
