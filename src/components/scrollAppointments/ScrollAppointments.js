import React, { Component } from 'react';
import {Text, View, ScrollView, ActivityIndicator, StatusBar} from 'react-native';
import styles from './styles';
import {bindActionCreators} from 'redux';
import {getAppointment} from '../../actions/getAppointmentAction';
import {getUsers} from '../../actions/getUsersAction';
import connect from 'react-redux/lib/connect/connect';

class ScrollAppointments extends Component {

  state = {
    user:[],
    isLoading: true,
    isLoading2: true,
    startTime:[],
    endTime:[],
    startDate:[],
    endDate:[],
    displayName: [],
  };

  async getData(){

    await this.props.getUsers().then(response => {
      console.log('user response: ', response);
      this.setState({users: response});
      this.setState({isLoading2: false});
    });
    await this.props.getAppointment().then(response => {
      console.log('appt. response: ', response);
      let appointments = response.appointment.data;
      let startTimeArray =[];
      let startDateArray =[];
      let endTimeArray =[];
      let endDateArray =[];
      let displayNameArray =[];

      if(appointments != null){
        for(let i = 0; i<appointments.length; i++){
          console.log(appointments[i]);
          // parse real date and time from starting timestamp
          let start_Time = this.parseTime(appointments[i].start_time);
          startTimeArray.push(start_Time);
          let start_Date = this.parseDate(appointments[i].start_time);
          startDateArray.push(start_Date);
          // parse real date and time from ending timestamp
          let end_Time = this.parseTime(appointments[i].end_time);
          endTimeArray.push(end_Time);
          let end_Date = this.parseDate(appointments[i].end_time);
          endDateArray.push(end_Date);
          console.log(end_Date);
          console.log(endDateArray);

          // set user's name
          let userName = this.parseName(appointments[i].user_id);
          displayNameArray.push(userName);
        }
        this.setState({startTime: startTimeArray});
        this.setState({startDate: startDateArray});
        this.setState({endTime: endTimeArray});
        this.setState({endDate: endDateArray});
        this.setState({displayName: displayNameArray});
        // Good to show screen
        this.setState({isLoading: false});
      }
    });
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
    for(let i=0; i< this.props.user.length; i++){
      if(this.props.user[i].id === userID){
        return this.props.user[i].first_name+' '+this.props.user[i].last_name;
      }
    }
    return "Anonymous user";
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    let appointments = this.props.appointment.data;
    if (this.state.isLoading === true || this.state.isLoading2 == true) {
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
          <ScrollView style = {styles.element}>
            {
              appointments.map((item, key) => {
                return(
                  <View>
                    <View style = {[styles.text, styles.item]}>
                      <Text style = {styles.name}>{this.state.displayName[key]}</Text>
                      <Text style = {styles.email}>{this.state.startDate[key]} {this.state.startTime[key]}</Text>
                      <Text style = {styles.reason}>{this.state.endDate[key]} {this.state.endTime[key]}</Text>
                    </View>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
      );
    }
  }
}

let mapStateToProps = state => {
  const { appointment, user} = state;
  return {
    appointment: appointment.appointment.appointment,
    errorResponse: appointment.errorResponse,
    errorMessage: appointment.errorMessage,
    user: user.user.user.data,
    ErrorResponse: user.errorResponse,
    ErrorMessage: user.errorMessage,
  };

};

let mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAppointment,
      getUsers,
    },
    dispatch
  );


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScrollAppointments);