import React from "react";
import {Dimensions, Image, KeyboardAvoidingView, Text, TextInput, TouchableHighlight, View} from "react-native";

import styles from './styles';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

class OverrideScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            over: "",

            showPassword: true,
            icEye: "eye-off-outline"
        };
    }
    render() {
        return (
            <View style={{flex:  1,
                alignItems: 'center',
                justifyContent: 'center'}}>

                <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={ {position: 'absolute',
                    left: '10%',
                    top: '10%',}}>
                    <Image
                        source={require("../../../assets/images/back.png")}
                    />
                </TouchableHighlight>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{color: 'black', fontSize: 32}}> Add New Override </Text>
                    <TextInput
                        placeholder="Insert Stop Value Here"
                        autoCapitalize="none"
                        placeholderTextColor="white"
                        value={this.state.over}
                        onChangeText={over => this.setState({ over})}
                        style={{
                            width: deviceWidth * 0.6,
                            borderBottomWidth: 1,
                            height: 40,
                            fontSize: 18,

                        }}
                    />

                    <TouchableHighlight onPress={() => {}} style={styles.button}>
                        <View>
                            <Text> Overrride Sensor </Text>
                        </View>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
}

export default OverrideScreen;