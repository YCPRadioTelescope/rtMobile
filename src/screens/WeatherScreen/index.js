import {Image, Text, TouchableHighlight, View, Animate, ScrollView, ActivityIndicator, StatusBar} from 'react-native';
import React from 'react';
import styles from './styles';
import { Divider } from 'react-native-elements';
import {bindActionCreators} from "redux";
import {login} from "../LoginScreen/AuthActions";
import {connect} from "react-redux";
import {getSensorData} from "../SensorScreen/SensorActions";
import {getWeatherData} from "../StatusScreen/WeatherActions";

//component to render each of the sensors in sensorlistcontainer
const Sensor = ({
                    key,
                    temp,
                    name,
                    style,
                    detail
                })=>(
    <View>
        <View style = {{flexDirection: 'row',justifyContent: 'space-between',}}>
            <Text style = {{alignSelf: 'flex-start', paddingLeft: '5%',}}>{name}</Text>
            <Text style = {{alignSelf: 'flex-end', paddingRight: '5%',}}>{detail}</Text>
        </View>
        <Divider style={styles.sectionDivider}/>
    </View>
);

class WeatherScreen extends React.Component {
    async getData(){

        await this.props.getWeatherData().then(response => {
            this.setState({isLoading: false});
        })
    }

    componentDidMount() {
        this.getData();
    }

    constructor() {
        super();
        this.state = {
            //this is the array that holds information the the sensor components
            isloading: false,

        }
    }

    handlepress = ()=>{
        this.props.navigation.navigate('Sensor');
    };

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
        if (this.state.isLoading) {
            console.log("Loading data from database");

            return (
                <View style={styles.loading}>
                    <ActivityIndicator/>
                    <StatusBar barStyle="default"/>
                </View>
            )
        } else {
            console.log("Done Loading! Weather Data", this.props.weather);
            return (
                <ScrollView>
                    <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                        <Image
                            source={require("../../../assets/images/back.png")}
                        />
                    </TouchableHighlight>
                    <View style={{marginTop: '10%', alignItems: 'center'}}>
                        <Text style={styles.header}>Weather</Text>
                    </View>
                    <Divider style={styles.sectionDivider}/>

                    <View style={styles.sensorlistcontainer}>
                        {this.props.weather.map(sensorInfo => {
                            return (
                                <TouchableHighlight onPress={() => {
                                    this.props.navigation.navigate('Sensor',
                                        {
                                            sensorname: sensorInfo.name,
                                            details: sensorInfo.detail,
                                        }
                                    )
                                }}>
                                    <Sensor name={sensorInfo.name}
                                            style={styles.sensorLightStyle}
                                            detail={sensorInfo.detail}
                                    />
                                </TouchableHighlight>
                            );
                        })}
                    </View>


                </ScrollView>
            );
        }
    }
}

/*
This will get a unchecked promise error and will not return the array properly
unless if these commands are ran in a cmd:
adb shell input keyevent 82
adb reverse tcp:3000 tcp:3000

 */
const mapStateToProps = state => {
    const { weather } = state;
    console.log("Getting wether = state in MapStateToProps",weather);
    return {

        weather: weather.weather.weather,
        errorResponse: weather.errorResponse,
        errorMessage: weather.errorMessage
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getWeatherData,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherScreen);