import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
var ws;
export default class TempNav extends Component {}
  /*constructor(props) {
    super(props);

    this.state = { open: false };

  }

  emit = () => {
    this.setState(prevState => ({ open: !prevState.open }))
    ws.send("It worked!")
  }

  render() {

    const LED = {
      backgroundColor: this.state.open ? 'lightgreen' : 'red',
      height: 30,
      position: 'absolute',
      flexDirection: 'row',
      bottom: 0,
      width: 100,
      top: 120,
      borderRadius: 40,
      justifyContent: 'space-between'

    }

    return (
      <View style={styles.container}>
        <Button
          onPress={this.emit}
          title={this.state.open ? "Turn off" : "Turn on"}
          color="#21ba45"
          accessibilityLabel="Learn more about this purple button"
        />
        <View style={LED}></View>
      </View>
    );
  }

  componentDidMount() {
    ws = new WebSocket('ws://10.0.0.147:8090');
    ws.onopen = () => ws.send(JSON.stringify({ type: 'greet', payload: 'Hello Mr. Server!' }))
    ws.onmessage = (data) => console.log(data.payload)
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/
