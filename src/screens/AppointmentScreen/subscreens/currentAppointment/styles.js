import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  content:{
    flex: 1,
    backgroundColor: '#3c324a'
  },
  data:{
    backgroundColor: '#d9e3f0',
    width:'100%',
    height:'100%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  userName:{
    marginTop:'5%',
    textAlign: 'center',
    alignContent: 'center',
    fontSize:25,
    fontWeight:'bold',
    color: '#3c324a',
  },
  times:{
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-around',
    marginTop:'10%',
    height: 100,
  },
  startTime:{
    width:'35%',
    display: 'flex',
    backgroundColor: '#EDEEF7',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    marginLeft: '5%',
    marginRight: '5%',

    flexDirection: 'column',
    textAlign: 'center',
    alignContent: 'center',
  },
  endTime:{
    width:'35%',
    height: '100%',
    alignContent: 'center',
    backgroundColor: '#EDEEF7',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    marginLeft: '5%',
    marginRight: '5%',
  },
  timingDetail:{
    color: '#3c324a',
    textAlign: 'center',
    fontSize:18,
  },
  timingText:{
    color: '#3c324a',
    textAlign: 'center',
    fontSize:23,
    fontWeight:'bold',
  },
  dateText:{
    color: '#3c324a',
    textAlign: 'center',
    fontSize:18,
  },
  celestial:{
    color: '#3c324a',
    textAlign: 'center',
    fontSize:18,
  },
  orientation:{
    color: '#3c324a',
    textAlign: 'center',
    fontSize:18,
  },
});