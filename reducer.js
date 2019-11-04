import { combineReducers } from "redux";
import AuthReducer from "./src/screens/LoginScreen/AuthReducer";
import emailReducer from "./src/reducers/emailReducer";
import getUsersReducer from "./src/reducers/getUsersReducer";
import sensorReducer from "./src/screens/SensorScreen/SensorReducer";
import weatherReducer from "./src/screens/StatusScreen/WeatherReducer";
const reducer = combineReducers({
  //user: AuthReducer,
  email: emailReducer,
  user: getUsersReducer,
  sensor: sensorReducer,
  weather: weatherReducer,
});

export default reducer;
