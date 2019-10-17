import {Image, Text, View, TouchableHighlight, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import ScrollElements from '../../components/scrollView/scrollView.js';
import {bindActionCreators} from "redux";
import {getUsers} from "../../actions/getUsersAction";
import connect from "react-redux/lib/connect/connect";
import axios from "axios";


class ApprovalDashboardScreen extends React.Component {

    state = {
        users:[]
    }


    async getData(){
        await this.props.getUsers();
    }

    componentDidMount() {
        //console.log("here");
        this.getData();
    }



  render() {
    console.log('props.Users', this.props.user);
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navTitle}>Approve Users</Text>
        </View>
        <ScrollElements style={styles.scroll} navigation={this.props.navigation} />
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
)(ApprovalDashboardScreen);
