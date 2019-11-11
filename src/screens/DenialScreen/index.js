import {Image, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';
import RectangleButton from '../../components/rectangleButton/RectangleButton.js';
import CustomReason from '../../components/customReason/customReason.js';

class DenialScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navTitle}>Deny User?</Text>
        </View>
        <View style={styles.buttonHolder}>
            <CustomReason user={this.props.navigation.getParam('user')} navigation={this.props.navigation}/>
            <RectangleButton text="Improper permissions" reason="Improper permissions" user={this.props.navigation.getParam('user')} navigation={this.props.navigation}/>
            <RectangleButton text="Vulgar Name" reason="Vulgar Name" user={this.props.navigation.getParam('user')} navigation={this.props.navigation}/>
            <RectangleButton text="Reason 3" reason="reason3" user={this.props.navigation.getParam('user')} navigation={this.props.navigation}/>
            <RectangleButton text="Reason 4" reason="reason4" user={this.props.navigation.getParam('user')} navigation={this.props.navigation}/>

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
