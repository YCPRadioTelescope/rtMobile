import React, { Component } from 'react'
import {StyleSheet, Image, View, TouchableHighlight} from 'react-native'
import {email} from '../../actions/emailAction.js'
import {bindActionCreators} from "redux";
import connect from "react-redux/lib/connect/connect";

class ApproveButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userID: this.props.userID,
    };
  }

  sendEmail(email, subject, body){
    console.log('Sending approval email');
    console.log('To:'+email);
    console.log('Subject:'+subject);
    console.log('Body: '+body);
  }

  onPress = () => {
    var ID = this.props.userID;
    // TODO: get email from userID
    var email = 'amcdevitt97@gmail.com';
    // TODO: get name from userID
    var name = 'Alyssa McDevitt';
    var subject = 'Congrats, you\'ve been approved!';
    var body = "Dear "+name+",  \nYour account for the YCAS radio telescope been approved. You may now sign in.";
    this.props.email(email, subject, body);
    this.props.navigation.goBack();
  }


 render() {
    return (
        <View>
            <TouchableHighlight onPress={this.onPress}>
                <Image
                    style={styles.button}
                    source={require('../../../assets/images/checkmarkButton.png')}
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
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApproveButton);
