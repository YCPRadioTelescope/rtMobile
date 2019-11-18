import {Text,  View} from 'react-native';
import React from 'react';
import styles from './styles';

class AppointmentScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navTitle}>Current appointment:</Text>
        </View>
        <View style={styles.content}>

            <Text>PlaceHolder</Text>

        </View>

      </View>
    );
  }
}

export default AppointmentScreen;
