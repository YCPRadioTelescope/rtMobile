import {Image, Text, View, TouchableHighlight, ActivityIndicator, StatusBar} from 'react-native';
import React from 'react';
import ScrollAppointments from "../../../../components/scrollAppointments/scrollAppointments";
import styles from "../currentAppointment/styles";


class ThirdRoute extends React.Component {
    state = {
        isLoading: true,
    };

    async getData() {
        this.setState({isLoading: false});
    }


    componentDidMount() {
        this.getData();
    }


    render() {
        if (this.state.isLoading === true) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator/>
                    <StatusBar barStyle="default"/>
                </View>
            )
        }
        else {
            return(
                <View>
                    <ScrollAppointments appointments={this.props.appointment}/>
                </View>
            );
        }
    }
}

// Need the below code for responses when using a reducer

export default ThirdRoute;

