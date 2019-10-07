import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import ApproveButton from '../approveButton/ApproveButton.js';
import DenyButton from '../denyButton/DenyButton.js';
import styles from './styles';

// cayNMPU2$B9Q

class ScrollElements extends Component {
   state = {
      names: [
         {'name': 'Ben', 'id': 1, 'email': 'test@test.com', 'level': 'Member', 'reason':'because'},
         {'name': 'Susan', 'id': 2, 'email': 'test@test.com', 'level': 'Member', 'reason':'because'},
         {'name': 'Robert', 'id': 3, 'email': 'test@test.com', 'level': 'Member', 'reason':'because'},
         {'name': 'Mary', 'id': 4, 'email': 'test@test.com', 'level': 'Member', 'reason':'because'},
         {'name': 'Daniel', 'id': 5, 'email': 'test@test.com', 'level': 'Member', 'reason':'because'},
         {'name': 'Laura', 'id': 6, 'email': 'test@test.com', 'level': 'Member', 'reason':'because'},
         {'name': 'John', 'id': 7, 'email': 'test@test.com', 'level': 'Member', 'reason':'because'},
         {'name': 'Debra', 'id': 8, 'email': 'test@test.com', 'level': 'Member', 'reason':'because'},
         {'name': 'Aron', 'id': 9, 'email': 'test@test.com', 'level': 'Member', 'reason':'because'},
         {'name': 'Ann', 'id': 10, 'email': 'test@test.com', 'level': 'Member', 'reason':'because'},
         {'name': 'Steve', 'id': 11, 'email': 'test@test.com', 'level': 'Member', 'reason':'because'},
         {'name': 'Olivia', 'id': 12, 'email': 'test@test.com', 'level': 'Member', 'reason':'because'}
      ]
   }
   render() {
      return (
         <View>
            <ScrollView style = {styles.element}>
               {
                  this.state.names.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                        <View style = {styles.text}>
                           <Text style = {styles.name}>{item.name}</Text>
                           <Text style = {styles.email}>{item.email}</Text>
                           <Text style = {styles.level}> Permission Level: {item.level}</Text>
                           <Text style = {styles.reason}> Reason: {item.reason}</Text>
                        </View>
                        <View style = {styles.buttons}>
                           <ApproveButton style = {styles.approveButton} userID = {item.id} />
                           <DenyButton style = {styles.denyButton} userID = {item.id} />
                        </View>
                     </View>
                  ))
               }
            </ScrollView>
         </View>
      )
   }
}
export default ScrollElements
