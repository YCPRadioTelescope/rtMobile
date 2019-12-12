import {Image, Text, View, TouchableHighlight, ActivityIndicator, StatusBar} from 'react-native';
import React from 'react';
import styles from './styles';
import ScrollAppointments from '../../../../components/scrollAppointments/ScrollAppointments';


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
/*
const mapStateToProps = state => {
    const { user } = state;
    return {
        user: user.user.user.data,
        errorResponse: user.errorResponse,
        errorMessage: user.errorMessage
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getUsers,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApprovalDashboardScreen);*/

export default ThirdRoute;
