import {
    Image,
    Text,
    TouchableHighlight,
    View,
    ScrollView,
    ActivityIndicator,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import { Divider } from 'react-native-elements';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getWeatherData} from "../../actions/WeatherActions";

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

class HistoryScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            //this is the array that holds information the the sensor components
            isLoading: false,
            buttonText: "Activate Override",
            // sensorName: this.props.navigation.getParam('sensorname', 'Sensor'),
            // status:  this.props.navigation.getParam('status', 3),
            // override: this.props.navigation.getParam('override',0),
            // id: this.props.navigation.getParam('id',-1),
            // sensor: this.props.navigation.getParam('sensor')
        }
    }



    async getData(){

        await this.props.getWeatherData().then(response => {
            this.setState({isLoading: false});
        })
    }

    componentDidMount() {
        this.getData();
    }


    handlepress = ()=>{
        this.props.navigation.navigate('Sensor');
    };
    drawSensorStatus = () =>{
        return 0;
    };


    render() {
        if (this.state.isLoading) {
            //console.log("Loading data from database in Weather screen");
            return (
                <View style={styles.loading}>
                    <ActivityIndicator/>
                    <StatusBar barStyle="default"/>
                </View>
            )
        } else {
            //console.log("Done Loading Weather Screen! Weather Data", this.props.weather);
            return (
                <ScrollView>
                    <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                        <Image
                            source={require("../../../assets/images/back.png")}
                        />
                    </TouchableHighlight>
                    <View style={{marginTop: '10%', alignItems: 'center'}}>
                        <Text style={styles.header}>History Screen</Text>
                    </View>
                    <Divider style={styles.sectionDivider}/>
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

        //weather: weather.weather.weather,
        //errorResponse: weather.errorResponse,
        //errorMessage: weather.errorMessage
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
)(HistoryScreen);
