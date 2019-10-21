import {Image, Text, TouchableHighlight, View, Animate, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import { Divider } from 'react-native-elements';
import {bindActionCreators} from "redux";
import {login} from "../LoginScreen/AuthActions";
import {connect} from "react-redux";
import {getSensorData} from "../SensorScreen/SensorActions";

//component to render each of the sensors in sensorlistcontainer
const Sensor = ({
                    key,
                    temp,
                    name,
                    style,
                    details
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
    async getData(){
        await this.props.getSensorData();

    }

    componentDidMount() {
        this.getData();
    }

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
                    details: [
                        {
                            name: "nametest1",
                            detail: 'detailtest1',
                        },
                    ],
                },
                {
                    key: 1,
                    temp: 40,
                    name: "test1",
                    status: "0",
                    details: [
                        {
                            name: "test1",
                            detail: 'detailtest1',
                        },
                        {
                            name: "test2",
                            detail: 'detailtest2',
                        },
                    ],
                },
                {
                    key: 2,
                    temp: 50,
                    name: "test2",
                    status: "0",
                    details: [
                        {
                            name: "test1",
                            detail: 'detailtest1',
                        },
                        {
                            name: "test2",
                            detail: 'detailtest2',
                        },
                        {
                            name: "test3",
                            detail: 'detailtest3',
                        },
                    ],
                },
                {
                    key: 3,
                    temp: 50,
                    name: "test3",
                    status: "0",
                    details: [
                        {
                            name: "test1",
                            detail: 'detailtest1',
                        },
                        {
                            name: "test2",
                            detail: 'detailtest2',
                        },
                        {
                            name: "test3",
                            detail: 'detailtest3',
                        },
                        {
                            name: "test4",
                            detail: 'detailtest4',
                        },
                    ],
                },
                {
                    key: 4,
                    temp: 50,
                    name: "test4",
                    status: "0",
                    details: [
                        {
                            name: "test1",
                            detail: 'detailtest1',
                        },
                        {
                            name: "test2",
                            detail: 'detailtest2',
                        },
                        {
                            name: "test3",
                            detail: 'detailtest3',
                        },
                        {
                            name: "test4",
                            detail: 'detailtest4',
                        },
                        {
                            name: "test5",
                            detail: 'detailtest5',
                        },

                    ],
                },
                {
                    key: 5,
                    temp: 50,
                    name: "test5",
                    status: "0",
                    details: [
                        {
                            name: "test1",
                            detail: 'detailtest1',
                        },
                        {
                            name: "test2",
                            detail: 'detailtest2',
                        },
                        {
                            name: "test3",
                            detail: 'detailtest3',
                        },
                        {
                            name: "test4",
                            detail: 'detailtest4',
                        },
                        {
                            name: "test5",
                            detail: 'detailtest5',
                        },
                        {
                            name: "test6",
                            detail: 'detailtest6',
                        },
                    ],
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
        console.log("sensor data received", this.props.sensor);
        return (
            <ScrollView>
                <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                    <Image
                        source={require("../../../assets/images/back.png")}
                    />
                </TouchableHighlight>
                <View style={{marginTop: '10%', alignItems: 'center'}}>
                    <Text style = {styles.header}>Status</Text>
                    <Image
                        source={require("../../../assets/images/largegreenstatus.png")}
                        style={styles.statusLightStyle}
                    />
                </View>
                <Divider style={styles.sectionDivider}/>
                <Text style= {styles.sensorlistheader}>Sensors</Text>
                <Divider style={styles.listheaderDivider}/>
                <View style={styles.container}>
                    <View style={styles.sensorlistcontainer}>
                        {this.state.sensorArr.map( sensorInfo => {
                            return (
                                <TouchableHighlight onPress={() => {this.props.navigation.navigate('Sensor',
                                    {
                                        sensorname: sensorInfo.name,
                                        details: sensorInfo.details,
                                    }
                                    )}}>
                                    <Sensor name = {sensorInfo.name}
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

/*
This will get a unchecked promise error and will not return the array properly
unless if these commands are ran in a cmd:
adb shell input keyevent 82
adb reverse tcp:3000 tcp:3000

 */
const mapStateToProps = state => {
    const { sensor } = state;
    return {
        sensor: sensor.sensor,
    errorResponse: sensor.errorResponse,
    errorMessage: sensor.errorMessage
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getSensorData,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatusScreen);