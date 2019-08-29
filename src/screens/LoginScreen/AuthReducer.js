import { AsyncStorage } from "react-native";

import { combineReducers } from "redux";

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./AuthActions";

const INITIAL_STATE = {
  userId: null,
  userName: null,
  jwt: null,
  emailAddress: null,
  fullName: null,
  loading: false,
  errorMessage: null,
  loginError: false,
  loadingUser: true,
  errorResponse: false
};
async function storeJwt({ jwt }) {
  try {
    await AsyncStorage.setItem("jwt", jwt);
  } catch (e) {
    throw new Error("Error saving JWT token");
  }
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Don't think this gets called
    case LOGIN:
      return {
        ...state,
        loading: true
        //loader: true
      };
    // Take all returned user info and put it in store
    case LOGIN_SUCCESS:
      let jwt = action.user.jwt === null ? "" : action.user.jwt;
      //storeJwt({ jwt: jwt });
      return {
        ...state,
        loading: false,
        isLoading: false,
        loginError: false,
        loadingUser: false,
        errorResponse: false,
        ...action.user
      };
    // Extract error message to display
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        loginError: true,
        isLoading: false,
        errorResponse: true,
        errorMessage: action.error
      };
    // Don't think this gets called
    default:
      return state;
  }
};

export default combineReducers({
  auth: authReducer
});
