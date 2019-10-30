import { combineReducers } from "redux";
import emailReducer from "./src/reducers/emailReducer";
import getUsersReducer from "./src/reducers/getUsersReducer";
import sensorReducer from "./src/screens/SensorScreen/SensorReducer";
import denyUserReducer from "./src/reducers/denyUserReducer";
import approveUserReducer from "./src/reducers/approveUserReducer";
import createInactiveUserReducer from "./src/reducers/createInactiveUserReducer";
import deleteUserReducer from "./src/reducers/deleteUserReducer";

const reducer = combineReducers({
  //user: AuthReducer,
  email: emailReducer,
  user: getUsersReducer,
  denyUser: denyUserReducer,
  approveUser: approveUserReducer,
  createInactiveUser: createInactiveUserReducer,
  deleteUser: deleteUserReducer,
  sensor: sensorReducer,
});

export default reducer;
