import {View, ActivityIndicator, StatusBar} from 'react-native';
import React from 'react';
import styles from './styles';
import connect from "react-redux/lib/connect/connect";
import {bindActionCreators} from "redux";
import ScrollAppointments from '../../../../components/scrollAppointments/ScrollAppointments';
import {getRecentAppointments} from "../../../../actions/getRecentAppointmentAction.js";

class SecondRoute extends React.Component {

    state = {
        isLoading: true,
        appointments:[],
    };

    async getData() {
      await this.props.getRecentAppointments().then(response => {
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
    const { recentAppointment} = state;
    return {
        recentAppointment: recentAppointment.appointment.appointment,
        errorResponse: recentAppointment.errorResponse,
        errorMessage: recentAppointment.errorMessage,
    };

};


let mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getRecentAppointments,
        },
        dispatch
    );


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SecondRoute);
