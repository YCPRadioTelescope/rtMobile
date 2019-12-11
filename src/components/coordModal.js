import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, TextInput, KeyboardAvoidingView, Dimensions} from 'react-native';
import TcpSocket from 'react-native-tcp-socket';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

class CoordModal extends Component {

  state = {
    modalVisible: this.props.visible,
    azimuth: '',
    elevation: ''
  };

  move = () => {

    let options = {
      host: '10.127.8.140',
      port: 8090
    };

    let client = TcpSocket.createConnection(options);

    client.on('data', function(data) {
      console.log('message was received', data);
    });

    client.on('error', function(error) {
      console.log(error);
    });

    client.on('close', function(){
      console.log('Connection closed!');
    });

    // Write on the socket
    client.write('COORDINATE_MOVE ELEV:' + this.state.elevation + 'AZIM:' + this.state.azimuth + 'ID:todd');

    // Close socket
    client.destroy();


    this.props.close();
    this.setState({azimuth: ''});
    this.setState({elevation: ''});
  };

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.visible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{
            marginTop: 50,
            paddingTop: 130,
            backgroundColor: "#bfbeba",
            width: "90%",
            height: 400,
            margin: "5%",
            borderRadius: 20,
            shadowColor: "black",
            shadowOffset: {height: 2},
            shadowOpacity: 0.3,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text style={{marginBottom: 20, fontSize: 18, fontWeight: 'bold'}}>Enter the Coordinates</Text>
            <KeyboardAvoidingView>
              <TextInput
                placeholder="Azimuth"
                autoCapitalize="none"
                placeholderTextColor="white"
                value={this.state.azimuth}
                onChangeText={azimuth => this.setState({ azimuth })}
                style={{
                  width: deviceWidth * 0.6,
                  borderBottomWidth: 1,
                  height: 40,
                  fontSize: 18,
                  color: 'black'
                }}
              />
              <TextInput
                placeholder="Elevation"
                autoCapitalize="none"
                placeholderTextColor="white"
                value={this.state.elevation}
                onChangeText={elevation => this.setState({ elevation })}
                style={{
                  width: deviceWidth * 0.6,
                  borderBottomWidth: 1,
                  height: 40,
                  fontSize: 18,
                  color: 'black',
                }}
              />
              <View style={{flex: 1, flexDirection: 'row', alignContent: 'space-between', justifyContent: 'space-between'}}>
                <TouchableHighlight
                  onPress={this.props.close} style={{
                    marginTop: 20,
                    borderWidth: 1,
                    borderColor: "#ffffff",
                    borderRadius: 14,
                    paddingVertical: 6,
                    paddingHorizontal: 13,
                    alignItems: 'center',
                    marginBottom: 122}}>
                  <Text>Cancel</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={this.move}
                  style={{
                  marginTop: 20,
                  borderWidth: 1,
                  borderColor: "#ffffff",
                  borderRadius: 14,
                  paddingVertical: 6,
                  paddingHorizontal: 13,
                  alignItems: 'center',
                  marginBottom: 122
                }}>
                  <Text>Move</Text>
                </TouchableHighlight>
              </View>
            </KeyboardAvoidingView>
          </View>
        </Modal>
      </View>
    );
  }
}

export default CoordModal;
