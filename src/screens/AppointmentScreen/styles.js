import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
  },
  navBar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#19214d',

    height: '12%',
    marginLeft: 0,
    marginRight: 0,
  },
  navTitle: {
    color:'#daddf0',
    position: 'absolute',
    top: '35%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    position: 'relative',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',
    alignSelf: 'center',
    width: '100%',
    height: '100%'
  },
  back: {
    position: 'absolute',
    left: '10%',
    top: '5%',
  },
  tabBackground: {
    backgroundColor: '#3f51b5',
  },
  indicatorStyle: {
    backgroundColor: '#b3bae5',
  },
});
