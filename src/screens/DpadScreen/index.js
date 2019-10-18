import {Image, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import AxisPad from 'react-native-axis-pad';
import Slider from '@react-native-community/slider';
import VerticalSlider from 'rn-vertical-slider';
import styles from './styles';

class DpadScreen extends React.Component {

  state = {
    verticalCordX: 0,
    verticalCordY: 0,
    horizontalCordX: 0,
    horizontalCordY: 0,
    sliderVerticalVal: 0.5,
    sliderHorizontalVal: 0.5,
  };

  move = (x, y) => {
    let verticalNum = this.state.sliderVerticalVal;
    let horizontalNum = this.state.sliderHorizontalVal;
    console.log("vertical", verticalNum);
    console.log("horizontal", horizontalNum);
    //console.log('in func', x, y);
    //while loop is very very bad here
    if(y < -.75 && x < .25 && x > -.25){ //up
      if(verticalNum < 1 ) {
        verticalNum = verticalNum + .01;  // bar goes right
      }
      this.setState({sliderVerticalVal: verticalNum})
    }
    if(y > .75 && x < .25 && x > -.25){ // down
      if(verticalNum > -1) {
        verticalNum = verticalNum - .01; // bar goes left
      }
      this.setState({sliderVerticalVal: verticalNum})
    }
    if(x < -.75 && y > -.25 && y < .25){  // left
      if(horizontalNum > -1) {
        horizontalNum = horizontalNum - .01;
      }
      this.setState({sliderHorizontalVal: horizontalNum})
    }
    if(x > .75 && y > -.25 && y < .25){ // right
      if(horizontalNum > -1) {
        horizontalNum = horizontalNum + .01;
      }
      this.setState({sliderHorizontalVal: horizontalNum})
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: '3%'}}>
          <Text>Declination</Text>
          <Slider
            style={{width: 300, height: 40}}
            minimumValue={0}
            maximumValue={1}
            disabled={true}
            value={this.state.sliderVerticalVal}
            thumbImage={require("../../../assets/images/redStatus.png")}
            minimumTrackTintColor="#0f0f0f"
            maximumTrackTintColor="#000000"
          />
          <Text>Right Ascension</Text>
          <Slider
            style={{width: 300, height: 40}}
            minimumValue={0}
            maximumValue={1}
            value={this.state.sliderHorizontalVal}
            disabled={true}
            thumbImage={require("../../../assets/images/redStatus.png")}
            minimumTrackTintColor="#0f0f0f"
            maximumTrackTintColor="#000000"
          />
        </View>
        <View style={{marginTop: '10%'}}>
          <AxisPad
            resetOnRelease={true}
            autoCenter={true}
            onValue={({ x, y }) => {
              // values are between -1 and 1
              console.log(x, y);
              this.move(x,y);
            }}>
          </AxisPad>
        </View>
        <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
          <Image
            source={require("../../../assets/images/back.png")}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

export default DpadScreen;
