import {Image, Text, View, TouchableHighlight} from 'react-native';
import React from 'react';
import styles from './styles';
import ScrollElements from '../../components/scrollView/scrollView.js';


class ApprovalDashboardScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navTitle}>Approve Users</Text>
        </View>
        <ScrollElements style={styles.scroll}/>

        
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
