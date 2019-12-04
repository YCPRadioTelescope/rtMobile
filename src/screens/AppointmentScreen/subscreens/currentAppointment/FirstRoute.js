import {View, Text } from 'react-native';
import React from 'react';
import {bindActionCreators} from "redux";
import {getAppointment} from "../../../../actions/getAppointmentAction.js"
import connect from "react-redux/lib/connect/connect";

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


    // Add timestamps, name, celestial body id, and orientation.
    render() {
        console.log("Appointments: ", this.props.appointment);
            return (
                <Text>}{this.props.appointment.data[0].status}</Text>
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

