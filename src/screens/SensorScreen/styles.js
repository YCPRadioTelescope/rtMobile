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
    //marginTop: '10%',
  },
  statusLightStyle: {
      width: 30,
      height: 30,
      backgroundColor: 'green',
      borderWidth: 10,
      borderColor: 'transparent',
      borderRadius: 50,
      alignSelf: 'flex-end',
      //position: 'absolute',
      //marginLeft: '50%',
      marginRight: '5%',
      // top: '0.0005%',
      //bottom: '100%',
      //left: '80%',
      //marginRight: 10,
  },
  header:{
    //position: 'absolute',
    //top: '10%',
    fontWeight: 'bold',
    fontSize: 30,
    paddingRight: '5%'
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
  button: {
    marginTop: '80%',
    borderWidth: 1,
    borderColor: "#cbd7dd",
    borderRadius: 14,
    paddingVertical: 6,
    paddingHorizontal: 13,
    backgroundColor: 'red',
    alignItems: 'center',
    width: '50%',
    marginLeft: '25%',
  },
});
