import {View, Text, ActivityIndicator, StatusBar} from 'react-native';
import React from 'react';
import styles from "./styles";

class FirstRoute extends React.Component {

    state = {
        appointment:[],
        user:[],
        isLoading: true,
        isLoading2: true,
        startTime:null,
        endTime:null,
        startDate:null,
        endDate:null,
        displayName: "null",
        orientationDisplay: null,
        celestialBodyDisplay: null,
    };

    handleData(users, appointment){

            // parse real date and time from starting timestamp
            let start_Time = this.parseTime(appointment.data[2].start_time);
            let start_Date = this.parseDate(appointment.data[2].start_time);
            this.setState({startTime: start_Time});
            this.setState({startDate: start_Date});
            // parse real date and time from ending timestamp
            let end_Time = this.parseTime(appointment.data[2].end_time);
            let end_Date = this.parseDate(appointment.data[2].end_time);
            this.setState({endTime: end_Time});
            this.setState({endDate: end_Date});

            // set user's name
            let userName = this.parseName(appointment.data[2].user_id);
            this.setState({displayName: userName});

            // get celestial body

            // Good to show screen
            this.setState({isLoading: false});
    }

    parseTime= (timestamp)=>{
        var a = new Date(timestamp);
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
       return timeValue;
    }

    parseDate= (timestamp)=>{
        var a = new Date(timestamp);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var calDate = month + ' ' + date + ' ' + year ;
        return calDate;
    }

    parseName= (userID)=>{
        console.log(this.props.users);
        for(let i=0; i< this.props.users.length; i++){
            if(this.props.users[i].id === userID){
                return this.props.users[i].first_name+' '+this.props.users[i].last_name;
            }
        }
        return "Anonymous user";
    }


    // Add timestamps, name, celestial body id, and orientation
    // this.props.appointment.data[0].status
    render() {
        if(this.props.appointment != null){
            this.handleData(this.props.appointment);
        }
        if (this.state.isLoading === true || this.state.isLoading2 === true) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator/>
                    <StatusBar barStyle="default"/>
                </View>
            )
        }
        else {
            return (
                <View style={styles.data}>
                    <Text style={styles.userName}>{this.state.displayName}'s Appointment.</Text>
                    <View style={styles.times}>
                        <View style={styles.startTime}>
                            <Text style={styles.timingDetail}>Starts at</Text>
                            <Text style={styles.timingText}>{this.state.startTime}</Text>
                            <Text style={styles.dateText}>{this.state.startDate}</Text>
                        </View>
                        <View style={styles.endTime}>
                            <Text style={styles.timingDetail}>Ends at</Text>
                            <Text style={styles.timingText} >{this.state.endTime}</Text>
                            <Text style={styles.dateText}>{this.state.endDate}</Text>
                        </View>
                    </View>
                    <Text style={styles.celestial}>Looking at {this.props.appointment.data[2].celestial_body_id}</Text>
                    <Text style={styles.orientation}>Orientation is:
                        {this.props.appointment.data[2].orientation_id}</Text>
                </View>
            );
        }
    }
}


/*
* <Text style={styles.celestial}>"Celestial body is:
                        "{this.props.appointment.data[2].celestial_body_id}</Text>
                    <Text style={styles.orientation}>"Orientation is:
                        "{this.props.appointment.data[2].orientation_id}</Text>
* */
// Need the below code for responses when using a reducer

export default FirstRoute;

