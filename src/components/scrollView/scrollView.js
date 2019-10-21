import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import ApproveButton from '../approveButton/ApproveButton.js';
import DenyButton from '../denyButton/DenyButton.js';
import styles from './styles';
import {getUsers} from "../../actions/getUsersAction";
import {email} from "../../actions/emailAction";
import {bindActionCreators} from "redux";
import connect from "react-redux/lib/connect/connect";
import {login} from "../../screens/LoginScreen/AuthActions";

// cayNMPU2$B9Q

class ScrollElements extends Component {



   render() {
      const navigation = this.props.navigation;
      const users = this.props.users;
      return (
         <View>
            <ScrollView style = {styles.element}>
               {
                  this.props.users.map(item => {
                    return(
                        <View style = {styles.text}>
                          <Text style = {styles.name}>{item.first_name}</Text>
                          <Text style = {styles.email}>{item.email_address}</Text>
                        </View>
                        /*<View style = {styles.buttons}>
                          <ApproveButton style = {styles.approveButton} userID = {item.id} navigation={this.props.navigation} />
                          <DenyButton style={styles.denyButton} userID={item.id} navigation={this.props.navigation} />
                        </View>*/
                    )
                  })
               }
           </ScrollView>
         </View>
      )
   }
}

export default ScrollElements;
