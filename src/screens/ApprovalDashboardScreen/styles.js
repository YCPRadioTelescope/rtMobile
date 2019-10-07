import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#f5f5f5',
  },
  navBar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cebaff',
    height:120,
    marginLeft:0,
    marginRight:0,
  },
  navTitle:{
    position: 'absolute',
    top:'54%',
    fontSize:20,
    fontWeight:'bold',
  },
  back:{
    position: 'absolute',
    left: '10%',
    top: '9%',
  },
  scroll:{
    flex:5,
    marginBottom:100,
  },
});
