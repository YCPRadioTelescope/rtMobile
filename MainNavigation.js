import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from './src/screens/LoginScreen';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';
import ApprovalDashboardScreen from './src/screens/ApprovalDashboardScreen';
import DenialScreen from './src/screens/DenialScreen';
import CustomDenialScreen from './src/screens/CustomDenialScreen';
import SensorScreen from './src/screens/SensorScreen';
import StatusScreen from './src/screens/StatusScreen';
import TempNavScreen from './src/screens/TempNavScreen';
import DpadScreen from './src/screens/DpadScreen';
import OverrideScreen from "./src/screens/OverrideScreen";
import WeatherScreen from "./src/screens/WeatherScreen";
import AppointmentScreen from "./src/screens/AppointmentScreen";

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
    Appointment: AppointmentScreen,
    Denial: DenialScreen,
    CustomDenial: CustomDenialScreen,
    Sensor: SensorScreen,
    Status: StatusScreen,
    Weather: WeatherScreen,
    Override: OverrideScreen,
    Dpad: DpadScreen,

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
      initialRouteName: "App"
    }
  )
);

