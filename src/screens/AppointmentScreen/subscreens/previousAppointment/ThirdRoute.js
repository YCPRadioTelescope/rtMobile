import {View, ActivityIndicator, StatusBar} from 'react-native';
import React from 'react';
import styles from './styles';
import connect from "react-redux/lib/connect/connect";
import {bindActionCreators} from "redux";
import ScrollAppointments from '../../../../components/scrollAppointments/ScrollAppointments';
import {getFutureAppointments} from "../../../../actions/getFutureAppointmentAction.js";

class ThirdRoute extends React.Component {

  state = {
    isLoading: true,
    appointments:[],
  };

  async getData() {
    await this.props.getFutureAppointments().then(response => {
      this.setState({appointments: response.appointments});
      this.setState({isLoading: false});
    });

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
          <ScrollAppointments appointments={this.state.appointments}/>
        </View>
      );
    }

  }
}

// Need the below code for responses when using a reducer

let mapStateToProps = state => {
  const { futureAppointment} = state;
  return {
    futureAppointment: futureAppointment.appointment.appointment,
    errorResponse: futureAppointment.errorResponse,
    errorMessage: futureAppointment.errorMessage,
  };

};


let mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getFutureAppointments,
    },
    dispatch
  );


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThirdRoute);
