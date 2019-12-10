import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    element:{
        marginBottom:'15%',
        backgroundColor: '#d9e3f0',
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
          //width: '75%',
   },
   name: {
          color:'#0c1a42',
          fontSize:18,
          fontWeight:'bold',
   },
});