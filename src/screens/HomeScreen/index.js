import {Text, View, TouchableHighlight} from 'react-native';
import React from 'react';
import {bindActionCreators} from 'redux';
import {login} from '../LoginScreen/AuthActions';
import {connect} from 'react-redux';
import { AsyncStorage } from "react-native";

class HomeScreen extends React.Component {

  logout = () => {
    console.log('logout');
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };

  render() {
    console.log('user', this.props.auth);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableHighlight onPress={this.logout} style={{marginTop: 20}}>
          <View>
            <Text> Press To Logout </Text>
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
)(HomeScreen);
