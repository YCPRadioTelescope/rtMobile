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
    top:'30%',
    left:'35%',
    fontSize:25,
    fontWeight:'bold',
  },
  back:{
    position: 'absolute',
    left: '10%',
    top: '5%',
  },
  mainStatusLight:{
    resizeMode:'contain',
    width:'7%',
    height:'37%',
    borderRadius: 100,
    top:'2%',
    left:'15%',
  },
  footageScreen:{
    position: 'absolute',
    resizeMode:'cover',
    width:'100%',
    height:'45%',
    top:'12%',
    borderColor:'#000',
    borderWidth:5,
  },

});
