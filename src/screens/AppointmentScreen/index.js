import {ActivityIndicator, Dimensions, Image, StatusBar, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {TabView, TabBar} from 'react-native-tab-view';
import FirstRoute from "./subscreens/currentAppointment/FirstRoute";
import SecondRoute from "./subscreens/futureAppointment/SecondRoute";
import ThirdRoute from "./subscreens/previousAppointment/ThirdRoute";
import {bindActionCreators} from "redux";
import {getRecentAppointments} from "../../actions/getRecentAppointmentAction";
import connect from "react-redux/lib/connect/connect";
import {getAppointment} from "../../actions/getAppointmentAction";
import {getUsers} from "../../actions/getUsersAction";

class AppointmentScreen extends React.Component {
    state = {
        appointment:[],
        recentAppointment:[],
        users:[],
        isLoading1: true,
        isLoading2: true,
        isLoading3: true,
    };

    async getData() {
        await this.props.getRecentAppointments().then(response => {
            this.setState({recentAppointment: response.recentAppointment});
        });
        this.setState({isLoading1: false});
        await this.props.getAppointment().then(response => {
            this.setState({appointment: response});
        });
        this.setState({isLoading2: false});
        await this.props.getUsers().then(response => {
            this.setState({users: response});
        });
        this.setState({isLoading3: false});
    }

    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Current' },
            { key: 'second', title: 'Future' },
            { key: 'third', title: 'Previous' },
        ],
    };

    componentDidMount() {
        this.getData();
    }

    renderScene({ route }) {
        if (!route.key) return null;

        if (route.key === 'first') {
            return <FirstRoute users={this.state.users} appointment={this.state.appointment} />; // SceneA specific props here
        }

        if (route.key === 'second') {
            return <SecondRoute  />; // SceneA specific props here
        }
        if (route.key === 'third') {
            return <ThirdRoute users={this.state.users} appointment={this.state.recentAppointment} />; // SceneA specific props here
        }
    }

  render() {

        if (this.state.isLoading1 === true || this.state.isLoading2 === true || this.state.isLoading3 === true) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator/>
                    <StatusBar barStyle="default"/>
                </View>
            )
        }

        else {
            return (
              <View style={styles.container}>
                <View style={styles.navBar}>
                  <Text style={styles.navTitle}>Appointment Manager:</Text>
                </View>
                <View style={styles.content}>
                    <TabView
                        renderTabBar={props =>
                            <TabBar
                                {...props}
                                indicatorStyle={styles.indicatorStyle}
                                style={styles.tabBackground}
                            />
                        }

                        navigationState={this.state}
                        renderScene={this.renderScene}
                        onIndexChange={index => this.setState({ index })}
                        initialLayout={{ width: Dimensions.get('window').width }}
                    />

                </View>
                  <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                      <Image
                          source={require("../../../assets/images/back_white.png")}
                      />
                  </TouchableHighlight>
              </View>
            );
        }
    }

}


let mapStateToProps = state => {
    const { appointment, user, recentAppointment} = state;
    return {
        appointment: appointment.appointment.appointment,
        errorResponse: appointment.errorResponse,
        errorMessage: appointment.errorMessage,
        recentAppointment: recentAppointment.recentAppointment,
        recentAppointmenterrorResponse: recentAppointment.errorResponse,
        recentAppointmenterrorMessage: recentAppointment.errorMessage,
        user: user.user.user.data,
        ErrorResponse: user.errorResponse,
        ErrorMessage: user.errorMessage,
    };

};


let mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getRecentAppointments,
            getAppointment,
            getUsers,
        },
        dispatch
    );


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FirstRoute);
