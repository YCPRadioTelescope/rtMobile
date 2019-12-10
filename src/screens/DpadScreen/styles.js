import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center'
    //marginTop: '20%',
  },
  back:{
    position: 'absolute',
    left: '10%',
    top: '40%',
  },
  navBar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    height:'12%',
    marginLeft:0,
    marginRight:0,
    flexDirection: 'row'
  },
  navTitle:{
    position: 'absolute',
    top:'35%',
    fontSize:20,
    fontWeight:'bold',
  },
});
