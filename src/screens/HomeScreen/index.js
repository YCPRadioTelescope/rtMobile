import {Image, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './styles';
import ScrollElements from "../../components/scrollView/scrollView";

class HomeScreen extends React.Component {

  render() {
    return (
        <View style={styles.container}>
            {/*      BEGIN NAVBAR           */}
            <View style={styles.navBar}>
                <Text style={styles.navTitle}>Status: </Text>
                <Image
                    source={require("../../../assets/images/redStatus.png")}
                    style={styles.mainStatusLight}/>
            </View>
            <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back}>
                <Image
                    source={require("../../../assets/images/back.png")}
                />
            </TouchableHighlight>
            {/*             END NAVBAR            */}
            {/*             BEGIN FOOTAGE         */}
            <Image
                source={require("../../../assets/images/footage.jpg")}  style={styles.footageScreen}/>
            {/*             END FOOTAGE            */}

        </View>
    );
  }
}

export default HomeScreen;
