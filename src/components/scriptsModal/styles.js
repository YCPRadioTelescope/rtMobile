import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  bgShadow:{
     width:'100%',
     height:'100%',
     backgroundColor:'black',
   },
    modalView:{
      marginTop: 50,
      paddingTop: 130,
      backgroundColor: "#bfbeba",
      width: "90%",
      height: 360,
      margin: "5%",
      borderRadius: 20,
      shadowColor: "black",
      shadowOffset: {height: 2},
      shadowOpacity: 0.3,
      justifyContent: 'center'
    },
  buttons:{
      flex: 1,
    width:'80%',
    marginLeft:'5%',
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    position:'relative',
    bottom:'30%',
  },
  closeButton:{
      position:'relative',
      bottom:'65%',
    left:'85%',
    width:23,
    borderColor:'black',
    borderStyle:'solid',
    borderWidth:2,
    borderRadius:15,
    justifyContent: 'center',
    alignContent:'center',
  },
  title:{
      fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft:'20%',
    position:'relative',
    bottom:'50%',
    right:'20%',
  },
    buttonStyle: {
        width: 150,
        marginTop: 10,
      marginLeft:10,
        padding: 10,
        borderRadius: 10,
      borderColor:'black',
      borderStyle:'solid',
      borderWidth:1,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        backgroundColor: '#dadaec'
   },

});
