import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import ApproveButton from '../approveButton/ApproveButton.js';
import DenyButton from '../denyButton/DenyButton.js';
import styles from './styles';

// cayNMPU2$B9Q

class ScrollElements extends Component {



   render() {
      const navigation = this.props.navigation;
      const users = this.props.users;
      console.log(users);
       console.log("TOP LEVEL ",this.props.buttonPushed);
      return (
         <View>
            <ScrollView style = {styles.element}>
               {
                  this.props.users.map(item => {
                    return(
                        <View>
                            <View style = {[styles.text, styles.item]}>
                              <Text style = {styles.name}>{item.first_name} {item.last_name}</Text>
                              <Text style = {styles.email}>{item.email_address}</Text>
                              <Text style = {styles.reason}>{item.company}</Text>
                            </View>

                            <View style = {styles.buttons}>

                              <ApproveButton style = {styles.approveButton} user={item} navigation={this.props.navigation} buttonPushed={this.props.buttonPushed} />
                              <DenyButton style={styles.denyButton} user={item} navigation={this.props.navigation} />
                            </View>
                        </View>
                    )
                  })
               }
           </ScrollView>
         </View>
      )
   }
}

export default ScrollElements;
