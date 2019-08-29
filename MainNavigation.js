import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from './src/screens/DetailScreen';

const screens = (
  {
    Home: HomeScreen,
    Detail: DetailsScreen
  }
);


const config = {
  headerMode: 'none',
  initialRouteName: 'Home'
};

const MainNavigator = createStackNavigator(screens,config);
export default createAppContainer(MainNavigator);
