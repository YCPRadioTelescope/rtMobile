import {View, Text } from 'react-native';
import React from 'react';
import {bindActionCreators} from "redux";
import {getAppointment} from "../../../../actions/getAppointmentAction.js"
import connect from "react-redux/lib/connect/connect";
import styles from "./styles";
import {getUsers} from "../../../../actions/getUsersAction";

class FirstRoute extends React.Component {

    state = {
        appointment:[],
        user:[],
        isLoading: true,
        startTime:null,
        endTime:null,
    };

    async getData(){

        await this.props.getAppointment().then(response => {
            this.setState({isLoading: false});
        });
       /* await this.props.getUsers().then(response => {
            this.setState({isLoading: false});
        })*/

    }

    parseTime= (timestamp)=>{
        var a = new Date(timestamp);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hours = a.getHours();
        var minutes = a.getMinutes();
        //var seconds = a.getSeconds();
        var timeValue;
        if (hours > 0 && hours <= 12) {
            timeValue= "" + hours;
        } else if (hours > 12) {
            timeValue= "" + (hours - 12);
        } else if (hours == 0) {
            timeValue= "12";
        }
        timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
        //timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
        timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM
        console.log(timeValue);
        var time = date + ' ' + month + ' ' + year + ' ' + timeValue ;
       return time;
    }

    componentDidMount() {
        this.getData();
        console.log("USER ID IS:",this.props.appointment.data[0].user_id);
        //console.log("USER DATA IS :",this.props.user);

        // parse real date and time from timestamp
        let start_Time = this.parseTime(this.props.appointment.data[0].start_time);
        console.log('start time: ', start_Time);
        this.setState({startTime: start_Time});
        let end_Time = this.parseTime(this.props.appointment.data[0].end_time);
        console.log('end time: ', end_Time);
    }

    // Add timestamps, name, celestial body id, and orientation
    // this.props.appointment.data[0].status
    render() {

            return (
                <View style={styles.data}>
                    <Text style={styles.userName}>"User is: "{this.props.appointment.data[0].user_id}</Text>
                    <Text style={styles.startTime}>{this.state.startTime}" - "</Text>
                    <Text style={styles.endTime}>{this.state.endTime}</Text>
                    <Text style={styles.celestial}>"Celestial body is: "{this.props.appointment.data[0].celestial_body_id}</Text>
                    <Text style={styles.orientation}>"Orientation is: "{this.props.appointment.data[0].orientation_id}</Text>
                </View>
            );
    }
}

// Need the below code for responses when using a reducer

let mapStateToProps1 = state => {
    const { appointment} = state;
    return {
        appointment: appointment.appointment.appointment,
        errorResponse: appointment.errorResponse,
        errorMessage: appointment.errorMessage
    };

};

/*let mapStateToProps2 = state => {
    const { user } = state;
    return {
        user: user.user.user.data,
        ErrorResponse: user.errorResponse,
        ErrorMessage: user.errorMessage,
    };

};*/

let mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getAppointment,
            getUsers,
        },
        dispatch
    );


export default connect(
    mapStateToProps1,
    //mapStateToProps2,
    mapDispatchToProps
)(FirstRoute);

