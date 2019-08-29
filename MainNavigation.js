import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from './src/screens/LoginScreen';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  {
    headerMode: "none",
    initialRouteName: "Login"
  }
);

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
      AuthLoading: AuthLoadingScreen,
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);








/*const screens = (
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
export default createAppContainer(MainNavigator);*/
