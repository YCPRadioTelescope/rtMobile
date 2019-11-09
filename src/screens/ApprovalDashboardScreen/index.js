import {Image, Text, View, TouchableHighlight, ActivityIndicator, StatusBar} from 'react-native';
import React from 'react';
import styles from './styles';
import ScrollElements from '../../components/scrollView/scrollView.js';
import {bindActionCreators} from "redux";
import {getUsers} from "../../actions/getUsersAction";
import connect from "react-redux/lib/connect/connect";



class ApprovalDashboardScreen extends React.Component {

    state = {
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
        /*if (1== this.props.navigation.getParam('buttonPushed')) {
            this.getData();
        }
        this.props.navigation.setParams({ buttonPushed: 0 });*/
        this.getData();
    }


    componentWillUnmount() {
        this.focusListener.remove();
    }

  render() {
        console.log("Parent:",this.props.navigation.getParam('buttonPushed'));
      if(this.state.isLoading){
        return(
          <View style={styles.loading}>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
          </View>
        )
      }
      else {
        return (
          <View style={styles.container}>
            <View style={styles.navBar}>
              <Text style={styles.navTitle}>Approve Users</Text>
            </View>

            <ScrollElements style={styles.scroll} navigation={this.props.navigation} users={this.props.user} buttonPushed={0}/>
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
