import {StyleSheet} from 'react-native';

var statuslightsize = 50;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header:{
    position: 'absolute',
    top: '10%',
    fontWeight: 'bold',
    fontSize: 30,
  },

  statuslight: {
  width: 50,
  height: 50,
  backgroundColor: 'green',
  borderWidth: 10,
  borderColor: 'transparent',
  borderRadius: 30,
  top: '9.5%',
  right: '25%',
  position: 'absolute',
  },
  sensorlistheader:{
    position: 'absolute',
    top: '20%',
  },
  sensorlistcontainer: {
    position: 'absolute',
    top: '25%',
    flex: 1,
    flexDirection: 'column'
  },
  back:{
    position: 'absolute',
    left: '10%',
    top: '10%',
  }
});
