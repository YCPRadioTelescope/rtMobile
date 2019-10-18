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
    height:'12%',
    marginLeft:0,
    marginRight:0,
  },
  navTitle:{
    position: 'absolute',
    top:'35%',
    fontSize:20,
    fontWeight:'bold',
  },
  buttonHolder:{
    position: 'relative',
    flexDirection:'column',
    alignItems: 'stretch',
    alignSelf:'center',
    width:'90%',
    height:'100%'
  },
  back:{
    position: 'absolute',
    left: '10%',
    top: '5%',
  }
});
