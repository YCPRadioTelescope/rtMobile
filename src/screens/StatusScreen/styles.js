import {StyleSheet} from 'react-native';

var statuslightsize = 50;

export default StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    //position: 'absolute',
    //top: '10%',
    fontWeight: 'bold',
    fontSize: 30,
    //borderBottomWidth: 5,

  },
  sensorlistheader:{
    position: 'absolute',
    top: '15%',
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
    top: '15%',
  },
  sectionDivider: {
    height: 1,
    marginTop: 10,
    marginBottom: 5
  }
});
