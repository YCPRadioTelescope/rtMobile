import {Image, Text, View, TouchableHighlight, ActivityIndicator, StatusBar} from 'react-native';
import React from 'react';
import styles from './styles';
import ScrollElements from '../../components/scrollView/scrollView.js';
import {bindActionCreators} from "redux";
import {getPendingUsers} from "../../actions/getPendingUsersAction";
import connect from "react-redux/lib/connect/connect";

class ApprovalDashboardScreen extends React.Component {

    state = {
        pendingUsers:[],
        isLoading: true,
    };

    async getData() {
        this.setState({pendingUsers: this.props.navigation.getParam("pendingUsers")});
    }

    componentDidMount() {
        this.focusListener = this.props.navigation.addListener("didFocus", () => {
            this.getData();
        });
        this.getData();
        console.log('PPPPPendingusers', this.state.pendingUsers);
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
    }

    render() {
        console.log('PPPPPendingusers', this.state.pendingUsers);
            return (
                <View style={styles.container}>
                    <View style={styles.navBar}>
                        <Text style={styles.navTitle}>Approve Users</Text>
                    </View>
                    <ScrollElements style={styles.scroll} navigation={this.props.navigation} users={this.state.pendingUsers} buttonPushed={0}/>
                    <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                        <Image
                            source={require("../../../assets/images/back.png")}
                        />
                    </TouchableHighlight>
                </View>
            );
        }
}

// Need the below code for responses when using a reducer

const mapStateToProps = state => {
    const { pendingUser } = state;
    return {
        user: pendingUser,
        errorResponse: pendingUser.errorResponse,
        errorMessage: pendingUser.errorMessage
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getPendingUsers,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApprovalDashboardScreen);