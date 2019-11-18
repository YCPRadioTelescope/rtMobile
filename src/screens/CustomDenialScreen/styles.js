import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  navBar: {
    alignItems: 'center',
    backgroundColor: '#cebaff',
    height:90,
    width:'100%',
    marginLeft:0,
    marginRight:0,
  },
  navTitle:{
    position: 'absolute',
    top:'35%',
    fontSize:20,
    fontWeight:'bold',
  },
  back:{
    position: 'absolute',
    left: '10%',
    top: 40,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width:'90%',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d6d7da',
    marginTop:'10%',
  },
  submit:{
    marginTop:'10%',
    color:'black',
  },
});
