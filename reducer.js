import { combineReducers } from "redux";
import AuthReducer from "./src/screens/LoginScreen/AuthReducer";
import emailReducer from "./src/reducers/emailReducer";
import getUsersReducer from "./src/reducers/getUsersReducer";
import sensorReducer from "./src/screens/SensorScreen/SensorReducer";

const reducer = combineReducers({
  //user: AuthReducer,
  email: emailReducer,
  user: getUsersReducer,
  sensor: sensorReducer,
});

export default reducer;
