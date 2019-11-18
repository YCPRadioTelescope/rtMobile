import React, { Component } from 'react'
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native'
import {email} from '../../actions/emailAction.js'
import {denyUser} from '../../actions/denyUserAction.js'
import {bindActionCreators} from "redux";
import connect from "react-redux/lib/connect/connect";

class RectangleButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userID: this.props.userID,
    };
  }



  onPress = () => {
    var user = this.props.user;
    var email = user.email_address;
    var name = user.first_name+" "+this.props.user.last_name;
    var subject = 'Needs review: Your YCAS radio telescope account was denied';
    var body = "Dear "+name+",  \nYour account for the YCAS radio telescope has"
    +" been denied for the following reason: " + this.props.reason +". If you "
    +"think this was in error, please email important people at an important address.";
    this.props.email(email, subject, body);
    this.props.denyUser(user.id);
    this.props.navigation.goBack();
  }

 render() {
    console.log(this.state);
    return (
        <View>
            <TouchableHighlight style={styles.button} onPress={this.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  button: {
    position:'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'10%',
    height:50,
    backgroundColor: '#444063',
    borderRadius: 5,
  },
  buttonText:{
    color:'white',
    fontSize:18,
    marginBottom:'10%',
  },
})

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
)(RectangleButton);
