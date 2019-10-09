import {Image, Text, View, TouchableHighlight, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import ScrollElements from '../../components/scrollView/scrollView.js';
import {bindActionCreators} from "redux";
import {getUsers} from "../../actions/getUsersAction";
import connect from "react-redux/lib/connect/connect";


class ApprovalDashboardScreen extends React.Component {

    state = {
        users:[]
    }


    async getData(){
        console.log("here");
        await this.props.getUsers();
        console.log(this.props.getUsers());
    }

    componentDidMount() {
        console.log("here");
        this.getData();
    }



  render() {
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
        user: user,
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
