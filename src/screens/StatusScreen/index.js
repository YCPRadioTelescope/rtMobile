import {Image, Text, TouchableHighlight, View, Animate, ScrollView, ActivityIndicator, StatusBar} from 'react-native';
import React from 'react';
import styles from './styles';
import { Divider } from 'react-native-elements';
import {bindActionCreators} from "redux";
import {login} from "../LoginScreen/AuthActions";
import {connect} from "react-redux";
import {getSensorData} from "../../actions/SensorActions";

//component to render each of the sensors in sensorlistcontainer
const Sensor = ({
                    key,
                    temp,
                    name,
                    style,
                    image
                })=>(
    <View>
        <View style = {{flexDirection: 'row',justifyContent: 'space-between',}}>
            <Text style = {{alignSelf: 'flex-start', paddingLeft: '5%',}}>{name}</Text>
            <Image
                source={ image}
                style = {style}
            />
        </View>
        <Divider style={styles.sectionDivider}/>
    </View>
);

class StatusScreen extends React.Component {
    async getData(){

        await this.props.getSensorData().then(response => {
            this.setState({isLoading: false});
            this.setState({sensorArray: this.props.sensor})
        })
    }

    componentDidMount() {
        this.focusListener = this.props.navigation.addListener("didFocus", () => {
            console.log('Status: Listener activated');
            this.getData();
        });


    }

    constructor() {
        super();
        this.state = {

            isLoading: true,
            sensorArray:[],
        }
    }

    handlepress = ()=>{
        this.props.navigation.navigate('Sensor');
    };

    getLightColor = (status,override) =>{
        /*
        This function sets the image of the sensor
        if override is 1 it returns orange
        if 0 the func returns based on the integer parameter 'status'
        0 returns red, 1 returns yellow, 2 returns green, returns grey if anything else
         */
        if(override){
            return require("../../../assets/images/orangeStatus.png");
        }
        else{
            if(status == 0){//0 = red
                return require("../../../assets/images/redStatus.png");
            }
            else if (status == 1){//1 = yellow
                return require("../../../assets/images/mediumyellowstatus.png");
            }
            else if (status == 2){// 2 = green
                return require("../../../assets/images/meduimgreenstatus.png");
            }
            else{//anything else should be a grey light to show something is wrong
                return require("../../../assets/images/greyStatus.png");
            }
        }
    };

    getStatusLightColor = () =>{
        let count = 0;
        let numYellow = 0;
        while(count < this.props.sensor.length){
            //if at least 1 sensor is red set status to Red
            if(this.props.sensor[count].status == 0 && !this.props.sensor[count].override){
                return require("../../../assets/images/largeredstatus.png");
            }
            //check if there are any yellows
            else if(this.props.sensor[count].status == 1 && !this.props.sensor[count].override){
                numYellow ++;
            }
            count++;
        }
        //if there are any yellow sensors set the status to yellow
        if(numYellow > 0){
            return require("../../../assets/images/largeyellowstatus.png");
        }
        //if there are no red or yellow sensors return green
        else{
            return require("../../../assets/images/largegreenstatus.png");
        }

    }

    componentWillUnmount() {
        this.focusListener.remove();
    }

    render() {
        if (this.state.isLoading) {
            console.log("isLoading is ",this.state.isLoading);
            return (
                <View style={styles.loading}>
                    <ActivityIndicator/>
                    <StatusBar barStyle="default"/>
                </View>
            )
        } else {
            //console.log("isLoading is ",this.state.isLoading);
            let statusLightColor = this.getStatusLightColor()
            console.log("sensor props in status screen", this.props.sensor);
            return (
                <ScrollView>
                    <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                        <Image
                            source={require("../../../assets/images/back.png")}
                        />
                    </TouchableHighlight>
                    <View style={{marginTop: '10%', alignItems: 'center'}}>
                        <Text style={styles.header}>Status</Text>
                        <Image
                            source = {statusLightColor}
                            style={styles.statusLightStyle}
                        />
                    </View>
                    <Divider style={styles.sectionDivider}/>
                    <Text style={styles.sensorlistheader}>Sensors</Text>
                    <Divider style={styles.listheaderDivider}/>

                    <View style={styles.sensorlistcontainer}>
                        {this.props.sensor.map(sensorInfo => {
                            return (
                                <TouchableHighlight onPress={() => {
                                    this.props.navigation.navigate('Sensor',
                                        {
                                            sensorname: sensorInfo.name,
                                            status: sensorInfo.status,
                                            override: sensorInfo.override,
                                            id: sensorInfo.id,
                                            sensor: sensorInfo
                                        }
                                    )
                                }}>
                                    <Sensor
                                        name={sensorInfo.name}
                                        style={styles.sensorLightStyle}
                                        image = {this.getLightColor(sensorInfo.status,sensorInfo.override)}
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
    const { sensor } = state;
    console.log("Getting sensor = state in MapStateToProps",sensor);
    return {
    sensor: sensor.sensor.sensor,
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
