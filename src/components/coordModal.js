import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

class CoordModal extends Component {

  state = {
    modalVisible: this.props.visible,
  };


  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    console.log('modal visible in modal', this.props.visible);
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
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={this.props.close}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default CoordModal;
