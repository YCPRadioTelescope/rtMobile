import { combineReducers } from "redux";
import emailReducer from "./src/reducers/emailReducer";
import getUsersReducer from "./src/reducers/getUsersReducer";
import sensorReducer from "./src/screens/SensorScreen/SensorReducer";
import denyUserReducer from "./src/reducers/denyUserReducer";
import approveUserReducer from "./src/reducers/approveUserReducer";

const reducer = combineReducers({
  //user: AuthReducer,
  email: emailReducer,
  user: getUsersReducer,
  denyUser: denyUserReducer,
  approveUser: approveUserReducer,
  sensor: sensorReducer,
});

export default reducer;
