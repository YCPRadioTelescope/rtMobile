import { combineReducers } from "redux";
import emailReducer from "./src/reducers/emailReducer";
import getUsersReducer from "./src/reducers/getUsersReducer";
import sensorReducer from "./src/screens/SensorScreen/SensorReducer";
import weatherReducer from "./src/reducers/WeatherReducer";
import denyUserReducer from "./src/reducers/denyUserReducer";
import approveUserReducer from "./src/reducers/approveUserReducer";
import overrideReducer from "./src/screens/SensorScreen/OverrideReducer"

const reducer = combineReducers({
  //user: AuthReducer,
  email: emailReducer,
  user: getUsersReducer,
  denyUser: denyUserReducer,
  approveUser: approveUserReducer,
  sensor: sensorReducer,
  weather: weatherReducer,
  override: overrideReducer
});

export default reducer;
