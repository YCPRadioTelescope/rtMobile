import React, { Component } from 'react';
import {StyleSheet, Image, View, TouchableHighlight} from 'react-native';

class DenyButton extends Component {


  onPress = () => {
    console.log('pressed deny by ', this.props.user.id);
    // TODO: Route to denial page
  }

  render() {
    //const navigation = this.props.navigation;
    const user = this.props.user;
    return (
      <View>
        <TouchableHighlight user={this.props.user} onPress={() => {this.props.navigation.navigate('Denial',{
          user:user,
        })}}>
          <Image
            style={styles.button}
            source={require('../../../assets/images/xButton.png')}
          />
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    width: 40,
    height:40,
    borderRadius: 20,
  },
})

export default DenyButton;
