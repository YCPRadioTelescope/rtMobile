import { combineReducers } from "redux";
import AuthReducer from "./src/screens/LoginScreen/AuthReducer";
import emailReducer from "./src/reducers/emailReducer";

const reducer = combineReducers({
  user: AuthReducer,
  email: emailReducer,
});

export default reducer;
