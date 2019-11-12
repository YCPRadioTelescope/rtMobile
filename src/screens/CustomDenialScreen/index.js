import {Image, Text, View, TouchableHighlight, ActivityIndicator, StatusBar, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import ScrollElements from '../../components/scrollView/scrollView.js';
import {bindActionCreators} from "redux";
import {denyUser} from '../../actions/denyUserAction.js'
import {getUsers} from "../../actions/getUsersAction";
import {email} from '../../actions/emailAction.js'
import connect from "react-redux/lib/connect/connect";



class CustomDenialScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.userID,
            text: '',
        };
    }

    onPress = () => {
        var user = this.props.user;
        var reason = this.state.text;
        var email = user.email_address;
        var name = user.first_name+" "+this.props.user.last_name;
        var subject = 'Needs review: Your YCAS radio telescope account was denied';
        var body = "Dear "+name+",  \nYour account for the YCAS radio telescope has"
            +" been denied for the following reason: " + reason +". If you "
            +"think this was in error, please email important people at an important address.";
        console.log("reason; ",reason);
        this.props.email(email, subject, body);
        this.props.denyUser(user.id);
        this.props.navigation.goBack();
    }

  render() {
        console.log("Parent:",this.props.navigation.getParam('buttonPushed'));
      if(this.state.isLoading){
        return(
          <View style={styles.loading}>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
          </View>
        )
      }
      else {
        return (
          <View style={styles.container}>
            <View style={styles.navBar}>
              <Text style={styles.navTitle}>Type your reason below</Text>
            </View>

              <TextInput
                  style={styles.input}
                  placeholder="Type your reason here..."
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                  autoCapitalize='sentences'
                  returnKeyType='send'
                  onSubmitEditing={this.onPress}
              />
              <TouchableHighlight onPress={this.onPress} style={styles.submit} >
                  <Image
                      source={require("../../../assets/images/forward.png")}
                  />
              </TouchableHighlight>

            <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
              <Image
                source={require("../../../assets/images/back.png")}
              />
            </TouchableHighlight>
          </View>
        );
      }
  }
}

// Need the below code for responses when using a reducer

const mapStateToProps = state => {
    return {

        errorResponse: email.errorResponse,
        errorMessage: email.errorMessage,
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            email,
            denyUser,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomDenialScreen);
