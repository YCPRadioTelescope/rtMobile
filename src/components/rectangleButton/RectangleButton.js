import React, { Component } from 'react'
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native'

class RectangleButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userID: this.props.userID,
    };
  }
  
  sendEmail(email, subject, body){
    console.log('Sending denial email');
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
    var subject = 'Needs review: Your YCAS radio telescope account was denied';
    var body = "Dear "+name+",  \nYour account for the YCAS radio telescope has"
    +" been denied for the following reason: " + this.props.reason +". If you "
    +"think this was in error, please email important people at an important address.";
    this.sendEmail(email, subject, body);
    this.props.navigation.goBack();
  }

 render() {
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 350,
    height:100,
    backgroundColor: '#444063',
    borderRadius: 5,
    marginLeft:15,
    marginTop:25,
  },
  buttonText:{
    color:'white',
    fontSize:18,
  },
})

export default RectangleButton