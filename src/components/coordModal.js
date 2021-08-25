import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, TextInput, KeyboardAvoidingView, Dimensions} from 'react-native';
import TcpSocket from 'react-native-tcp-socket';
import {setValue} from "../actions/setValueAction";
import {bindActionCreators} from "redux";
import connect from "react-redux/lib/connect/connect";
import config from '../../config';
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
      host: config.Host,
      port: config.Port,
      reuseAddress: true,
    };

    let client = TcpSocket.createConnection(options, (address) => {
      //console.log(address);
     // console.log('Connection made!');
      // Write on the socket
      client.write('COORDINATE_MOVE ELEV:' + this.state.elevation + 'AZIM:' + this.state.azimuth + 'ID:todd');
    });

    client.on('data', (data) => {
      //console.log('Received: ', data);
      client.destroy(); // kill client after server's response
    });

    client.on('error', (error)=>{
      console.log('Error: ', error);
    });

    client.on('close', ()=>{
      //console.log('Connection closed!');
    });



    // Close socket
    client.destroy();
    //update fake db. azimuth and elevation need to be cast to floating point or ints or else Dpad will crash
    this.props.setValue("Azimuth_Motor",parseFloat(this.state.azimuth));
    this.props.setValue("Elevation_Motor",parseFloat(this.state.elevation));

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

const mapStateToProps = state => {
    return {

        /*errorResponse: email.errorResponse,
        errorMessage: email.errorMessage,
        errorResponse: approveUser.errorResponse,
        errorMessage: approveUser.errorMessage,*/
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            setValue,
        },
        dispatch
    );


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoordModal);


