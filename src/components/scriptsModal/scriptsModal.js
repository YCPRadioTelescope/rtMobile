import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, Dimensions} from 'react-native';
import TcpSocket from 'react-native-tcp-socket';
import styles from './styles';
import {bindActionCreators} from "redux";
import connect from "react-redux/lib/connect/connect";
import {setValue} from '../../actions/setValueAction';
import config from "../../../config";
class ScriptsModal extends Component {

  state = {
    modalVisible: this.props.visible,
  };

  confirm(scriptName) {

    Alert.alert(
      'Wait',
      'Are you sure you want to run ' + scriptName + ' on the telescope?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => this.move(scriptName),
        },
      ],
      {cancelable: false},
    );
  };
move(scriptName){
  console.log('Build updated for sure!');
    let options = {
      host: config.Host,
      port: config.Port,
      reuseAddress: true,
    };

    let client = TcpSocket.createConnection(options, (address) => {
      console.log(address);
      console.log('Connection made! Sending ', scriptName);
      // Write on the socket
      client.write(scriptName);
    });

    client.on('data', (data) => {
      console.log('Received: ', data);
      client.destroy(); // kill client after server's response
    });

    client.on('error', (error)=>{
      console.log('Error: ', error);
    });

    client.on('close', ()=>{
      console.log('Connection closed!');
    });

    // Close socket
    client.destroy();
    this.props.close();
  };

  render() {
    return (
      <View style={styles.bgShadow}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.visible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Select a script to run</Text>


                <TouchableHighlight
                  style = {styles.closeButton}
                  onPress={this.props.close} >
                  <Text style={{   fontSize: 15, fontWeight: 'bold', textAlign: 'center'}}>X</Text>
                </TouchableHighlight>

              <View style={styles.buttons}>
                <View style={styles.Col1}>
                  <TouchableHighlight style = {styles.buttonStyle}
                  onPress={() => this.confirm("SCRIPT: STOW")}>
                    <Text style={{   fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>Stow</Text>
                  </TouchableHighlight>

                  <TouchableHighlight style = {styles.buttonStyle}
                    onPress={() => this.confirm("SCRIPT: DUMP")}>
                    <Text style={{   fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>Snow Dump</Text>
                  </TouchableHighlight>

                  <TouchableHighlight style = {styles.buttonStyle} onPress={() => this.confirm("SCRIPT: FULL_EV")}>
                    <Text style={{   fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>Full Elevation</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.Col2}>
                  <TouchableHighlight style = {styles.buttonStyle} onPress={() => this.confirm("SCRIPT: FULL_CLOCK")}>
                    <Text style={{   fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>Full 360 Clockwise</Text>
                  </TouchableHighlight>

                  <TouchableHighlight style = {styles.buttonStyle} onPress={() => this.confirm("SCRIPT: FULL_COUNTER")}>
                    <Text style={{   fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>Full 360 Counter Clockwise</Text>
                  </TouchableHighlight>

                  <TouchableHighlight style = {styles.buttonStyle} onPress={() => this.confirm("SCRIPT: CALIBRATE")}>
                    <Text style={{   fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>Calibration</Text>
                  </TouchableHighlight>
                </View>



              </View>
          </View>
        </Modal>
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {

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
)(ScriptsModal);


