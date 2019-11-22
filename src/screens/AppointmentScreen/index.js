import {Text,  View} from 'react-native';
import React from 'react';
import styles from './styles';
import { TabView, SceneMap } from 'react-native-tab-view';

let FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

let SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

class AppointmentScreen extends React.Component {

    
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'First' },
            { key: 'second', title: 'Second' },
        ],
    };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navTitle}>Current appointment:</Text>
        </View>
        <View style={styles.content}>

            <Text>PlaceHolder</Text>

            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: FirstRoute,
                    second: SecondRoute,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});

export default AppointmentScreen;
