import {Dimensions, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import { TabView, SceneMap } from 'react-native-tab-view';
import FirstRoute from "./subscreens/currentAppointment/FirstRoute";

let SecondRoute = () => (
    <View style={styles.secondRoute} />
);

let ThirdRoute = () => (
    <View style={styles.thirdRoute} />
);

class AppointmentScreen extends React.Component {


    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Current' },
            { key: 'second', title: 'Previous' },
            { key: 'third', title: 'Future' },
        ],
    };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navTitle}>Appointment Manager:</Text>
        </View>
        <View style={styles.content}>
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: FirstRoute,
                    second: SecondRoute,
                    third: ThirdRoute,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />

        </View>

      </View>
    );
  }
}


export default AppointmentScreen;
