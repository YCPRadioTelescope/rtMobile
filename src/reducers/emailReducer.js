import { combineReducers } from "redux";

import {
  EMAIL,
  EMAIL_SUCCESS,
  EMAIL_FAILURE,
} from "../actions/emailAction";

let INITIAL_STATE ={
  "destination": null ,
  "message": null,
  "subject": null,
};

const emailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Don't think this gets called
    case EMAIL:
      return {
        ...state,
        loading: true
        //loader: true
      };
    // Take all returned user info and put it in store
    case EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoading: false,
        errorResponse: false,
      };
    // Extract error message to display
    case EMAIL_FAILURE:
      return {
        ...state,
        loading: false,
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
  email: emailReducer
});
