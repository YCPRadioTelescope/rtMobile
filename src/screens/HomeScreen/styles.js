import {Dimensions, StyleSheet} from 'react-native';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  navBar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#19214d',
    height: '12%',
    marginLeft: 0,
    marginRight: 0,
  },
  navContainer:{
    position: 'absolute',
    top:'30%',
    left:'35%',
  },
  navTitle:{
    color:'#daddf0',
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
    height: deviceHeight/2.5,
    width: deviceWidth,
  },
  button: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 14,
    paddingVertical: 6,
    paddingHorizontal: 13,
    alignItems: 'center',
    width: deviceWidth/1.5
  },
  users:{
    //resizeMode:'contain',
    borderRadius: 100,
    position: 'absolute',
    top:'44%',
    left:'76%',
    height: 31,
    width: 35,
  },
  userNum:{
    position: 'absolute',
    top:'48%',
    left:'79%',
    color: 'white',
    fontWeight:'bold',
  },
  dpad:{
    alignItems: 'center',
    marginTop: '7%',
  },
  dpadSize: {
    marginTop: '4%',
    height: deviceHeight/7,
    width: deviceWidth/4
  }


});
