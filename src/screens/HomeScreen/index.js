import {Text, View, TouchableHighlight} from 'react-native';
import React from 'react';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Homesss Screen</Text>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Detail')}>
          <View>
            <Text> Press To Nav </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default HomeScreen;
