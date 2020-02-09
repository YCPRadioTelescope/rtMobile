import {Dimensions, Image, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import AxisPad from 'react-native-axis-pad';
import Slider from '@react-native-community/slider';
import VerticalSlider from 'rn-vertical-slider';
import {setValue} from "../../actions/setValueAction";

import styles from './styles';
import connect from "react-redux/lib/connect/connect";
import {bindActionCreators} from "redux";
import {setOverride} from "../../actions/OverrideActions";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

class DpadScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verticalCordX: 0,
      verticalCordY: 0,
      horizontalCordX: 0,
      horizontalCordY: 0,
      azimuth: this.props.navigation.getParam("azimuth", 45),
      elevation: this.props.navigation.getParam("elevation", 45),
      sliderVerticalPic: "",
      sliderHorizontalPic: "",
    };
    this.timer = null;

    if (this.state.azimuth <= 5 && this.state.azimuth > 0 || this.state.azimuth < 360 && this.state.azimuth >= 355) {
      this.state.sliderHorizontalPic = require("../../../assets/images/mediumyellowstatus.png");
    } else if (this.state.azimuth === 0 || this.state.azimuth === 360) {
      this.state.sliderHorizontalPic = require("../../../assets/images/redStatus.png");
    } else {
      this.state.sliderHorizontalPic = require("../../../assets/images/meduimgreenstatus.png");
    }
    if (this.state.elevation <= 0 && this.state.elevation > -10 || this.state.elevation < 90 && this.state.elevation >= 85) {
      this.state.sliderVerticalPic = require("../../../assets/images/mediumyellowstatus.png");
    } else if (this.state.elevation === -1 || this.state.elevation === 90) {
      this.state.sliderVerticalPic = require("../../../assets/images/redStatus.png");
    } else {
      this.state.sliderVerticalPic = require("../../../assets/images/meduimgreenstatus.png");
    }
  }

  nav = () => {
    this.props.navigation.navigate("Home", {"azimuth": this.state.azimuth, "elevation": this.state.elevation});
  };

  move = ( direction ) => {
      let verticalNum = this.state.elevation;
      let horizontalNum = this.state.azimuth;

      if (direction === 'up') { //up
        if (verticalNum < 90) {
          verticalNum = verticalNum + .5;
        }
        this.setState({elevation: verticalNum});
      }
      if (direction === 'down') { // down
        if (verticalNum > -10) {
          verticalNum = verticalNum - .5;
        }
        this.setState({elevation: verticalNum})
      }
      if (direction === 'left') {  // left
        if (horizontalNum > 0) {
          horizontalNum = horizontalNum - 1;
        }
        this.setState({azimuth: horizontalNum});
      }
      if (direction === 'right') { // right
        if (horizontalNum < 360) {
          horizontalNum = horizontalNum + 1;
        }
        this.setState({azimuth: horizontalNum})
      }
      if (this.state.azimuth <= 5 && this.state.azimuth > 0 || this.state.azimuth < 360 && this.state.azimuth >= 355) {
        this.setState({sliderHorizontalPic: require("../../../assets/images/mediumyellowstatus.png")});
      } else if (this.state.azimuth === 0 || this.state.azimuth === 360) {
        this.setState({sliderHorizontalPic: require("../../../assets/images/redStatus.png")});
      } else {
        this.setState({sliderHorizontalPic: require("../../../assets/images/meduimgreenstatus.png")});
      }
      if (this.state.elevation <= 0 && this.state.elevation > -10 || this.state.elevation < 90 && this.state.elevation >= 85) {
        this.setState({sliderVerticalPic: require("../../../assets/images/mediumyellowstatus.png")});
      } else if (this.state.elevation === -10 || this.state.elevation === 90) {
        this.setState({sliderVerticalPic: require("../../../assets/images/redStatus.png")});
      } else {
        this.setState({sliderVerticalPic: require("../../../assets/images/meduimgreenstatus.png")});
      }
    this.timer = setTimeout(() => this.move(direction), 10);

    this.props.setValue("Azimuth_Motor",this.state.azimuth);
    this.props.setValue("Elevation_Motor",this.state.elevation);
  };

  stopTimer = () => {
    clearTimeout(this.timer);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <TouchableHighlight onPress={this.nav} style={styles.back}>
            <Image
              source={require("../../../assets/images/back.png")}
            />
          </TouchableHighlight>
          <Text style={styles.navTitle}>Manual Move</Text>
        </View>
        <View style={{marginTop: '5%'}}>
          <Text>Azimuth : {this.state.azimuth} </Text>
          <Slider
            style={{width: 300, height: 40, marginRight: '20%'}}
            minimumValue={0}
            maximumValue={360}
            value={this.state.azimuth}
            disabled={true}
            thumbImage={this.state.sliderHorizontalPic}
            minimumTrackTintColor="#0f0f0f"
            maximumTrackTintColor="#000000"
          />
        </View>
        <Text style={{marginLeft: '60%'}}>Elevation : {this.state.elevation} </Text>
        <View style={{ marginLeft:'80%', marginTop: '40%', transform: [{ rotate: '270deg'}]}}>
          <Slider
            style={{width: 300, height: 40}}
            minimumValue={-10}
            maximumValue={90}
            disabled={true}
            value={this.state.elevation}
            thumbImage={this.state.sliderVerticalPic}
            minimumTrackTintColor="#0f0f0f"
            maximumTrackTintColor="#000000"
          />
        </View>
          <View style={{position: 'absolute', top: '50%', left: '48%'}}>
            <TouchableHighlight style={styles.back} onPressIn={() => this.move('up')} onPressOut={this.stopTimer}>
              <Image
                source={require("../../../assets/images/up.png")}
              />
            </TouchableHighlight>
          </View>
        <View style={{position: 'absolute', top: '57%', left: '36%'}}>
          <TouchableHighlight style={styles.back} onPressIn={() => this.move('left')} onPressOut={this.stopTimer}>
            <Image
              source={require("../../../assets/images/back.png")}
            />
          </TouchableHighlight>
        </View>
          <View style={{position: 'absolute', top: '57%', left: '59%'}}>
            <TouchableHighlight style={styles.back} onPressIn={() => this.move('right')} onPressOut={this.stopTimer}>
              <Image
                source={require("../../../assets/images/right.png")}
              />
            </TouchableHighlight>
          </View>
          <View style={{position: 'absolute', top: '65%', left: '48%'}}>
            <TouchableHighlight style={styles.back} onPressIn={() => this.move('down')} onPressOut={this.stopTimer}>
              <Image
                source={require("../../../assets/images/down.png")}
              />
            </TouchableHighlight>
          </View>
      </View>
    );
  }
}

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
            setValue,
        },
        dispatch
    );


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DpadScreen);