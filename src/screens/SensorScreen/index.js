import {Image, Text, TouchableHighlight, View, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import { Divider } from 'react-native-elements';
import {setOverride} from "../../actions/OverrideActions";
import {bindActionCreators} from "redux";
import {email} from "../../actions/emailAction";
import {approveUser} from "../../actions/approveUserAction";
import connect from "react-redux/lib/connect/connect";
import { LineChart,XAxis, YAxis, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

const Detail = ({
                    key,
                    detail,
                    name,
                    style,
                    image

                })=>(
    <View>
        <View style = {{flexDirection: 'row',justifyContent: 'space-between',}}>
            <Text style = {{alignSelf: 'flex-start', paddingLeft: '5%'}}>{name}</Text>
            <Image
                source={image}
                style = {style}
            />
        </View>
        <Divider style={styles.sectionDivider}/>
    </View>
);



class SensorScreen extends React.Component {


        state = {
            //this is the array that holds information the the sensor components
            buttonText: "Activate Override",
            //azimuth: this.props.navigation.getParam("azimuth", 45),
            sensorName: this.props.navigation.getParam('sensorname', 'Sensor'),
            status:  this.props.navigation.getParam('status', 3),
            override: this.props.navigation.getParam('override',0),
            id: this.props.navigation.getParam('id',-1),
            sensor: this.props.navigation.getParam('sensor'),
            data : [50, 10, 40, 95, 20, 0, 85, 91, 35, 53, 6, 24, 50, 10, 0],
            verticalContentInset : {  top: 10, bottom: 10 },
            axesSvg : { fontSize: 10, fill: 'grey' },
            xAxisHeight : 30,
        }


    getLightColor = (status,override) =>{
        /*
        This function sets the image of the sensor
        if override is 1 it returns orange
        if 0 the func returns based on the integer parameter 'detail'
        0 returns red, 1 returns yellow, 2 returns green, returns grey if anything else
         */
        if(override){
            this.state.buttonText = "Remove Override"
            return require("../../../assets/images/orangeStatus.png");
        }
        else{
            this.state.buttonText = "Activate Override"
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

    updateOverride = () =>{
        if(this.state.override){
            console.log("Turning off override at sensor ",this.state.id);
            this.setState({buttonText: "Activate Override"});
            this.setState({override: 0})
            this.props.setOverride(this.state.sensor.name,0);
        }
        else{
            console.log("Turning oon override at sensor ",this.state.id);
            this.setState({buttonText: "Remove Override"});
            this.setState({override: 1})
            this.props.setOverride(this.state.sensor.name,1);
        }

    };

    updateChart = (option) => {
        /*
        Have one big array that serves as a base. Then chop up based on option provided
         */
    };

  render() {
    const { navigation } = this.props;




    const status = navigation.getParam('details', 3)
      //console.log("This sensor's id is: ",this.state.id);
      console.log("The state.sensor in sensor screen",this.state.sensor);
    return (
        <ScrollView>
            <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                <Image
                    source={require("../../../assets/images/back.png")}
                />
            </TouchableHighlight>
            <View style={{marginTop: '10%', alignItems: 'center',}}>
                <Text style = {styles.header}> {this.state.sensorName}</Text>

            </View>
            <Divider style={styles.sectionDivider}/>
            <View style={styles.container}>
                <View style={styles.detailslistcontainer}>
                    <TouchableHighlight onPress={() => {}}>
                        <Detail name = {this.state.sensorName} status={this.state.status}
                        style = {styles.statusLightStyle}
                        image = {this.getLightColor(this.state.status,this.state.override)}
                        />
                    </TouchableHighlight>
                </View>
            </View>
            <TouchableHighlight onPress={this.updateOverride} style={styles.button}>
                <View>
                    <Text style={{color: 'white'}}> {this.state.buttonText} </Text>
                </View>
            </TouchableHighlight>

            <View style={styles.chart}>
                <YAxis
                    data={this.state.data}
                    style={{ marginBottom: this.state.xAxisHeight }}
                    contentInset={this.state.verticalContentInset}
                    svg={this.state.axesSvg}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <LineChart
                        style={{ flex: 1 }}
                        data={this.state.data}
                        contentInset={this.state.verticalContentInset}
                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                    >
                        <Grid/>
                    </LineChart>
                    <XAxis
                        style={{ marginHorizontal: -10, height: this.state.xAxisHeight }}
                        data={this.state.data}
                        formatLabel={(value, index) => index}
                        contentInset={{ left: 10, right: 10 }}
                        svg={this.state.axesSvg}
                    />
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableHighlight onPress={this.updateChart(0)} style={styles.histbutton}>
                    <View>
                        <Text style={{color: 'white'}}> 1 day </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.updateChart(1)} style={styles.histbutton}>
                    <View>
                        <Text style={{color: 'white'}}> 1 Week </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.updateChart(2)} style={styles.histbutton}>
                    <View>
                        <Text style={{color: 'white'}}> 1 Month </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.updateChart(3)} style={styles.histbutton}>
                    <View>
                        <Text style={{color: 'white'}}> 1 Year </Text>
                    </View>
                </TouchableHighlight>
            </View>


        </ScrollView>
    );
  }
}

// Layout of an x-axis together with a y-axis is a problem that stems from flexbox.
// All react-native-svg-charts components support full flexbox and therefore all
// layout problems should be approached with the mindset "how would I layout regular Views with flex in this way".
// In order for us to align the axes correctly we must know the height of the x-axis or the width of the x-axis
// and then displace the other axis with just as many pixels. Simple but manual.
//example found at: https://github.com/JesperLekland/react-native-svg-charts-examples/blob/master/storybook/stories/both-axes.js


const mapStateToProps = state => {
    return {

        /*errorResponse: email.errorResponse,
        errorMessage: email.errorMessage,
        errorResponse: approveUser.errorResponse,
        errorMessage: approveUser.errorMessage,*/
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            setOverride,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SensorScreen);
