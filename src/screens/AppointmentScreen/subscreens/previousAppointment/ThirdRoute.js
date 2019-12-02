import {Image, Text, View, TouchableHighlight, ActivityIndicator, StatusBar} from 'react-native';
import React from 'react';
import styles from './styles';
import ScrollElements from '../../../../components/scrollView/scrollView.js';
import {bindActionCreators} from "redux";
import {getAppointment} from "../../../../actions/getAppointmentAction.js";


class ThirdRoute extends React.Component {

    /*state = {
        users:[],
        isLoading: true,
    };

    async getData() {
        await this.props.getUsers().then(response => {
            this.setState({isLoading: false});
        });
    }


    componentDidMount() {
        this.focusListener = this.props.navigation.addListener("didFocus", () => {
            this.getData();
        });
        this.getData();
    }

    componentDidUpdate() {
        // If buttonPushed was set to 1, reload and test buttonPushed back to 0.
        if (1 === this.props.navigation.getParam('buttonPushed')) {
            this.getData();
            this.props.navigation.setParams({ buttonPushed: 0 });
        }

        //this.getData();
    }


    componentWillUnmount() {
        this.focusListener.remove();
    }*/

    render() {
        return (
            <View style={styles.content} />
        );
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
