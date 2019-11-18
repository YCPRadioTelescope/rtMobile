import React, { Component } from 'react'
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native'

class CustomReason extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.userID,
        };
    }

    onPress = () => {
        console.log("CLICKED");
    }




    render() {
        console.log(this.state);
        return (
            <View>
                <TouchableHighlight style={styles.button}  onPress={() => {this.props.navigation.navigate('CustomDenial',{
                    user:this.props.user,
                })}}>
                    <Text style={styles.buttonText}>
                            {this.props.text}
                    </Text>
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

export default CustomReason;
