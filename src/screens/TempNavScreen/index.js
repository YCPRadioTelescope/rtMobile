import {Text, View, TouchableHighlight} from 'react-native';
import React from 'react';
import {bindActionCreators} from 'redux';
import {login} from '../LoginScreen/AuthActions';
import {connect} from 'react-redux';
import { AsyncStorage } from "react-native";
import styles from './styles';

class TempNavScreen extends React.Component {

  logout = () => {
    console.log('logout');
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };

  render() {
    console.log('user', this.props.auth);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{marginBottom: 20, fontSize: 32}}>Temporary Screen</Text>
        <TouchableHighlight onPress={() => {this.props.navigation.navigate('Home')}} style={styles.button}>
          <View>
            <Text> Home Screen  </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {this.props.navigation.navigate('Sensor')}} style={styles.button}>
          <View>
            <Text> Sensor Screen </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {this.props.navigation.navigate('Status')}} style={styles.button}>
          <View>
            <Text> Status Screen </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {this.props.navigation.navigate('ApprovalDashboard')}} style={styles.button}>
          <View>
            <Text> Approval Dashboard Screen </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {this.props.navigation.navigate('Denial')}} style={styles.button}>
          <View>
            <Text> Denial Screen </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.logout} style={styles.logoutButton}>
          <View>
            <Text style={{color: 'red'}}> Logout </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    auth: user.auth,
    errorResponse: user.auth.errorResponse,
    errorMessage: user.auth.errorMessage
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TempNavScreen);
