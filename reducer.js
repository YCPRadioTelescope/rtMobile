import { combineReducers } from "redux";
import AuthReducer from "./src/screens/LoginScreen/AuthReducer";

const reducer = combineReducers({
  user: AuthReducer,
});

export default reducer;
