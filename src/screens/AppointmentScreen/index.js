import {Dimensions, Image, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {TabView, TabBar} from 'react-native-tab-view';
import FirstRoute from "./subscreens/currentAppointment/FirstRoute";
import SecondRoute from './subscreens/futureAppointment/SecondRoute';
import ThirdRoute from "./subscreens/previousAppointment/ThirdRoute";


class AppointmentScreen extends React.Component {

    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Current' },
            { key: 'second', title: 'Previous' },
            { key: 'third', title: 'Future' },
        ],
    };

    renderScene({ route }) {
        if (!route.key) return null;

        if (route.key === 'first') {
            return <FirstRoute  />; // SceneA specific props here
        }

        if (route.key === 'second') {
          return <SecondRoute  />;
        }
        if (route.key === 'third') {
          return <ThirdRoute  />;
        }
    }

  render() {
      //console.log('props?: ', this.props);
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navTitle}>Appointment Manager:</Text>
        </View>
        <View style={styles.content}>
            <TabView
                renderTabBar={props =>
                    <TabBar
                        {...props}
                        indicatorStyle={styles.indicatorStyle}
                        style={styles.tabBackground}
                    />
                }

                navigationState={this.state}
                renderScene={this.renderScene}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />

        </View>
          <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
              <Image
                  source={require("../../../assets/images/back.png")}
              />
          </TouchableHighlight>
      </View>
    );
  }
}


export default AppointmentScreen;
