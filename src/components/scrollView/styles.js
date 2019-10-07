import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    element:{
        marginBottom:150,
    },
    item: {
        
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20, 
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        backgroundColor: 'white'
   },
   text:{
          flexDirection: 'column',
          flex:2,
          justifyContent: 'space-between',
          textAlign: 'left',
          width: '75%',
   },
   name: {
          color:'#0c1a42',
          fontSize:18,
          fontWeight:'bold',
   },
   email: {
          color:'black',
          fontSize:14,
   },
   level: {
          color:'black',
          fontSize:14,
   },
   reason: {
          color:'black',
          fontSize:14,
   },
   buttons:{
     position:'absolute',
     top:'0%',
     right:'0%',
     flexDirection: 'row',
     flex:2,
     marginTop:30,
     marginRight:10,
   },
   approveButton:{
     position:'absolute',
     right:'5%',
   },
});