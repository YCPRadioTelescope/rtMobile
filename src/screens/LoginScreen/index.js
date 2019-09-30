import {Text, View, TouchableHighlight, TextInput, Dimensions, ImageBackground, StyleSheet, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import {login} from './AuthActions';
import styles from "./styles";
import { AsyncStorage } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      emailAddress: this.props.auth.emailAddress || "",
      password: this.props.auth.password || "",
      showPassword: true,
      icEye: "eye-off-outline"
    };
  }


  login = async () => {
    await this.props.login(this.state.emailAddress, this.state.password).then(response => {
      //console.log('response', response);
      if(response.type === "LOGIN_SUCCESS"){
        this.props.navigation.navigate("TempNav");
      }
      else{
        alert("Looks like the stars did not align correctly!  Please try to login again.")
      }
    })
  };

  render() {
    return (
      <ImageBackground
        style={{
          width: deviceWidth,
          height: deviceHeight,
        }}
        source={require("../../../assets/images/skyy.jpg")}
        resizeMode="cover"
      >
        <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{color: 'white', fontSize: 32}}> YCP Radio Telescope </Text>
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="white"
            value={this.state.emailAddress}
            onChangeText={emailAddress => this.setState({ emailAddress })}
            style={{
              width: deviceWidth * 0.6,
              borderBottomWidth: 1,
              height: 40,
              fontSize: 18,
              color: 'white'
            }}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={this.state.showPassword}
            autoCapitalize="none"
            placeholderTextColor="white"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            style={{
              width: deviceWidth * 0.6,
              borderBottomWidth: 1,
              height: 40,
              fontSize: 18,
              color: 'white',
            }}
          />
          <TouchableHighlight onPress={this.login} style={styles.button}>
            <View>
              <Text> login </Text>
            </View>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </ImageBackground>
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
)(LoginScreen);
