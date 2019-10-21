import {Image, Text, View, TouchableHighlight, ScrollView, ActivityIndicator, StatusBar} from 'react-native';
import React from 'react';
import styles from './styles';
import ScrollElements from '../../components/scrollView/scrollView.js';
import {bindActionCreators} from "redux";
import {getUsers} from "../../actions/getUsersAction";
import connect from "react-redux/lib/connect/connect";
import axios from "axios";


class ApprovalDashboardScreen extends React.Component {

    state = {
        users:[],
        isLoading: true,
    };

    async getData() {
      await this.props.getUsers().then(response => {
        this.setState({isLoading: false});
      })
    }


    componentDidMount() {
        this.getData();
    }

  render() {
      if(this.state.isLoading){
        return(
          <View style={styles.loading}>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
          </View>
        )
      }
      else {
        console.log('hereeeeee');
        return (
          <View style={styles.container}>
            <View style={styles.navBar}>
              <Text style={styles.navTitle}>Approve Users</Text>
            </View>
            {/*<Text>{this.props.user[0].id}</Text>*/}
            <ScrollElements style={styles.scroll} navigation={this.props.navigation} users={this.props.user} />
            <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
              <Image
                source={require("../../../assets/images/back.png")}
              />
            </TouchableHighlight>
          </View>
        );
      }
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
