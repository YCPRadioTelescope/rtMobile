import React, { Component } from 'react'
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native'

class RectangleButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userID: this.props.userID,
    };
  }
  // See: https://github.com/sendgrid/sendgrid-nodejs/issues/222
  sendEmail(to, subject, body){
    let content = {
        "personalizations":[ {
            "to": [ { "email": to } ],
            "subject": subject } ],
            "from": { "email": "from_address@example.com" },
            "content": [ { "type": "text/plain",
            "value": body
        } ]
    }

     fetch('https://api.sendgrid.com/v3/mail/send', {
       method: 'POST',
       headers: {
     	'Authorization': 'Bearer ' + process.env.SENDGRID_API_KEY,
     	'Content-Type': 'application/json',
       },
       body: JSON.stringify(content),
       }).then((response) => {
            this.setState({response: `${response.status} - ${response.ok}`});
       });
  }

  onPress = () => {
    var ID = this.props.userID;
    // TODO: get email from userID
    var email = 'amcdevitt97@gmail.com'
    // TODO: get name from userID
    var name = 'Alyssa McDevitt';
    var subject = 'Needs review: Your YCAS radio telescope account was denied';
    var body = "Dear "+name+",  \nYour account for the YCAS radio telescope has"
    +" been denied for the following reason: " + this.props.reason +". If you "
    +"think this was in error, please email important people at an important address.";
    this.sendEmail(email, subject, body);
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

export default RectangleButton