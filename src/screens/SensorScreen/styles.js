import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  back:{
    position: 'absolute',
    left: '10%',
    top: '10%',
    marginTop: '10%',
  },
  statusLightStyle: {
    width: 40,
    height: 40,
    top: '1.0%',
    //paddingBottom: '20%',
    right: '22.5%',
    position: 'absolute',
  },
  header:{
    //position: 'absolute',
    //top: '10%',
    fontWeight: 'bold',
    fontSize: 30,
  },
  sectionDivider: {
    height: 1,
    marginTop: 10,
    marginBottom: 5
  },
  detailslistcontainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%'
  },
});
