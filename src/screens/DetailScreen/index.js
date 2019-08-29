import {Text, View, TouchableHighlight, TextInput, Dimensions} from 'react-native';
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
      //loading: this.props.auth.loading || false,
      //loadingFromStorage: true,
      //userInfo: null,
      showPassword: true,
      icEye: "eye-off-outline"
    };
  }


  login = async () => {
    await this.props.login(this.state.emailAddress, this.state.password);
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
          <View>
            <Text> Press To Nav Back to Home </Text>
          </View>
        </TouchableHighlight>
        <TextInput
          //disabled={this.state.loading}
          placeholder="Email"
          //secureTextEntry={this.state.showPassword}
          autoCapitalize="none"
          placeholderTextColor="#9B9B9B"
          value={this.state.emailAddress}
          onChangeText={emailAddress => this.setState({ emailAddress })}
          style={{
            width: deviceWidth * 0.5,
            borderBottomWidth: 0,
            height: 40,
            fontSize: 18
          }}
        />
        <TextInput
          //disabled={this.state.loading}
          placeholder="Password"
          //secureTextEntry={this.state.showPassword}
          autoCapitalize="none"
          placeholderTextColor="#9B9B9B"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          style={{
            width: deviceWidth * 0.5,
            borderBottomWidth: 0,
            height: 40,
            fontSize: 18
          }}
        />
        <TouchableHighlight onPress={this.login}>
          <View>
            <Text> login </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

/*export default DetailsScreen;*/
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
