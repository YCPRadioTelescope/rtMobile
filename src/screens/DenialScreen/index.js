import {Image, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';
import RectangleButton from '../../components/rectangleButton/RectangleButton.js';

class DenialScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navTitle}>Deny User?</Text>
        </View>
        <View style={styles.buttonHolder}>
            <RectangleButton text="Improper permissions" reason="Improper permissions" navigation={this.props.navigation}/>
            <RectangleButton text="Vulgar Name" reason="Vulgar Name" navigation={this.props.navigation}/>
            <RectangleButton text="Reason 3" reason="reason3" navigation={this.props.navigation}/>
            <RectangleButton text="Reason 4" reason="reason4" navigation={this.props.navigation}/>
            <RectangleButton text="Reason 5" reason="reason5" navigation={this.props.navigation}/>
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

export default DenialScreen;
