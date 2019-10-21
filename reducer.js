import { combineReducers } from "redux";
import AuthReducer from "./src/screens/LoginScreen/AuthReducer";
import sensorReducer from "./src/screens/SensorScreen/SensorReducer";

const reducer = combineReducers({
  user: AuthReducer,
  sensor: sensorReducer,
});

export default reducer;
