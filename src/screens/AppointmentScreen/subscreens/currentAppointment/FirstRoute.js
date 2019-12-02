import {Image, Text, View, TouchableHighlight, ActivityIndicator, StatusBar} from 'react-native';
import React from 'react';
import styles from './styles';
import ScrollElements from '../../../../components/scrollView/scrollView.js';
import {bindActionCreators} from "redux";
import {getAppointment} from "../../../../actions/getAppointmentAction.js"
import connect from "react-redux/lib/connect/connect";

class FirstRoute extends React.Component {

    state = {
        appointment:[],
        isLoading: true,
    };


    render() {
        console.log(this.props.appointment);
            return (
                <Text>}{this.props.appointment}</Text>
            );

    }
}

// Need the below code for responses when using a reducer

let mapStateToProps = state => {
    const { appointment } = state;
    return {
        appointment: appointment.data,
        errorResponse: appointment.errorResponse,
        errorMessage: appointment.errorMessage
    };
};

let mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getAppointment,
        },
        dispatch
    );


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FirstRoute);

