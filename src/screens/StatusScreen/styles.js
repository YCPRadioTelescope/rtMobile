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
  },
  sensorlistheader:{
    position: 'absolute',
    top: '16.5%',
    alignSelf: 'center',
    marginTop: '15%',
  },
  sensorlistcontainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%'
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
  },
  listheaderDivider: {
    height: 1,
    marginTop: 20,
    marginBottom: 5
  },
  sensorLightStyle: {
    width: 30,
    height: 30,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'transparent',
    borderRadius: 50,
    alignSelf: 'flex-end',
    left: '800%',
    //position: 'absolute',
  },
  statusLightStyle: {
    width: 50,
    height: 50,
    top: '15.0%',
    right: '22.5%',
    position: 'absolute',
  },

});
