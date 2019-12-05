import {View, Text } from 'react-native';
import React from 'react';
import {bindActionCreators} from "redux";
import {getAppointment} from "../../../../actions/getAppointmentAction.js"
import connect from "react-redux/lib/connect/connect";
import styles from "./styles";

class FirstRoute extends React.Component {

    state = {
        appointment:[],
        isLoading: true,
    };

    async getData(){

        await this.props.getAppointment().then(response => {
            this.setState({isLoading: false});
        })
    }

    componentDidMount() {
        this.getData();
    }


    // Add timestamps, name, celestial body id, and orientation
    // this.props.appointment.data[0].status
    render() {

            return (
                <View style={styles.data}>
                    <Text style={styles.userName}>"User is: "{this.props.appointment.data[0].user_id}</Text>
                    <Text style={styles.startTime}>{this.props.appointment.data[0].start_time}" - "</Text>
                    <Text style={styles.endTime}>{this.props.appointment.data[0].end_time}</Text>
                    <Text style={styles.celestial}>"Celestial body is: "{this.props.appointment.data[0].celestial_body_id}</Text>
                    <Text style={styles.orientation}>"Orientation is: "{this.props.appointment.data[0].orientation_id}</Text>
                </View>
            );
    }
}

// Need the below code for responses when using a reducer

let mapStateToProps = state => {
    const { appointment } = state;
    return {
        appointment: appointment.appointment.appointment,
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

