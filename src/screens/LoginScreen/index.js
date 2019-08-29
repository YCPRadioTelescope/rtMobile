import {Text, View, TouchableHighlight, TextInput, Dimensions, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import {login} from './AuthActions';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

class DetailsScreen extends React.Component {

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
    await this.props.login(this.state.emailAddress, this.state.password);
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{color: 'white', fontSize: 32}}> YCP Radio Telescope </Text>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
            <View>
              <Text> Press To Nav Back to Home </Text>
            </View>
          </TouchableHighlight>
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
              fontSize: 18
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
              fontSize: 18
            }}
          />
          <TouchableHighlight onPress={this.login} style={styles.button}>
            <View>
              <Text> login </Text>
            </View>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#cbd7dd",
    borderRadius: 14,
    paddingVertical: 6,
    paddingHorizontal: 13,
    alignItems: 'center'
  },
});

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
)(DetailsScreen);