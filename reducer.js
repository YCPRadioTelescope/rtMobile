import { combineReducers } from "redux";
import AuthReducer from "./src/screens/DetailScreen/AuthReducer";

const reducer = combineReducers({
  user: AuthReducer,
});

export default reducer;
