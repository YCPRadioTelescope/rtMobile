import React, { Component } from 'react'
import {StyleSheet, Image, View, TouchableHighlight} from 'react-native'

class ApproveButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userID: this.props.userID,
    };
  }

  onPress = () => {
    console.log('pressed Accept by ', this.props.userID );
  }

 render() {
    return (
        <View>
            <TouchableHighlight onPress={this.onPress}>
                <Image
                    style={styles.button}
                    source={require('../../../assets/images/checkmarkButton.png')}
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

export default ApproveButton