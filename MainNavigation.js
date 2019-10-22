import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from './src/screens/LoginScreen';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import ApprovalDashboardScreen from './src/screens/ApprovalDashboardScreen';
import DenialScreen from './src/screens/DenialScreen';
import SensorScreen from './src/screens/SensorScreen';
import StatusScreen from './src/screens/StatusScreen';
import TempNavScreen from './src/screens/TempNavScreen';
import OverrideScreen from "./src/screens/OverrideScreen";


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
    TempNav: TempNavScreen,
    Home: HomeScreen,
    ApprovalDashboard: ApprovalDashboardScreen,
    Denial: DenialScreen,
    Sensor: SensorScreen,
    Status: StatusScreen,
    Override: OverrideScreen,
  },
  {
    initialRouteName: "TempNav",
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

