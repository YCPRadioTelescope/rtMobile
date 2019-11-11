import React, { Component } from 'react'
import {StyleSheet, View, TouchableHighlight, TextInput, Image} from 'react-native'
import {email} from '../../actions/emailAction.js'
import {denyUser} from '../../actions/denyUserAction.js'
import {bindActionCreators} from "redux";
import connect from "react-redux/lib/connect/connect";

class CustomReason extends Component {

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
        console.log(this.state);
        return (
            <View style={styles.button}>
                <TextInput
                    style={styles.input}
                    placeholder="Type here to translate!"
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
            </View>
        )
    }
}


const styles = StyleSheet.create({
    button: {
        position:'relative',
        marginTop:'10%',
        height:50,
        backgroundColor: '#444063',
        borderRadius: 5,
        flexDirection:'row',
    },
    buttonText:{
        color:'white',
        fontSize:18,
        marginBottom:'10%',
    },
    input:{
        position:'relative',
        top:'1%',
        left:'15%',
        backgroundColor: 'white',
        height:40,
        width:'75%',

    },
    submit:{
        position:'relative',
        top: '5%',
        left: '100%',
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
)(CustomReason);
