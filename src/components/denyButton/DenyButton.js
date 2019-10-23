import React, { Component } from 'react';
import {StyleSheet, Image, View, TouchableHighlight} from 'react-native';

class DenyButton extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      userID: this.props.userID,
    };
  }*/

  /*onPress = () => {
    console.log('pressed deny by ', this.props.userID );
    // TODO: Route to denial page
  }*/

 render() {
  const navigation = this.props.navigation;
    return (
        <View>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Denial')}>
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
