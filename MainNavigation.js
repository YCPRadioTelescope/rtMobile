import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from './src/screens/LoginScreen';

const screens = (
  {
    Home: HomeScreen,
    Login: LoginScreen,
  }
);


const config = {
  headerMode: 'none',
  initialRouteName: 'Login'
};

const MainNavigator = createStackNavigator(screens,config);
export default createAppContainer(MainNavigator);
