import { combineReducers } from "redux";
import emailReducer from "./src/reducers/emailReducer";
import getUsersReducer from "./src/reducers/getUsersReducer";
import sensorReducer from "./src/reducers/SensorReducer";
import weatherReducer from "./src/reducers/WeatherReducer";
import denyUserReducer from "./src/reducers/denyUserReducer";
import approveUserReducer from "./src/reducers/approveUserReducer";
import overrideReducer from "./src/screens/SensorScreen/OverrideReducer";
import getAppointmentsReducer from "./src/reducers/getAppointmentsReducer";
import getRecentAppointmentsReducer from "./src/reducers/getRecentAppointmentsReducer";
import getFutureAppointmentsReducer from "./src/reducers/getFutureAppointmentsReducer";
import getPendingUsersReducer from "./src/reducers/getFutureAppointmentsReducer";

const reducer = combineReducers({
  //user: AuthReducer,
  email: emailReducer,
  user: getUsersReducer,
  pendingUser: getPendingUsersReducer,
  denyUser: denyUserReducer,
  approveUser: approveUserReducer,
  sensor: sensorReducer,
  weather: weatherReducer,
  override: overrideReducer,
  appointment: getAppointmentsReducer,
  futureAppointment: getFutureAppointmentsReducer,
  recentAppointment: getRecentAppointmentsReducer,
});

export default reducer;
