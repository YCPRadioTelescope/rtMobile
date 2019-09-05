import {Image, Text, View, TouchableHighlight} from 'react-native';
import React from 'react';
import styles from './styles';

class ApprovalDashboardScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Approval Dashboard Screen</Text>
        <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
          <Image
            source={require("../../../assets/images/back.png")}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

export default ApprovalDashboardScreen;
