import axios from "axios";
import { AsyncStorage } from "react-native";


const url = "https://prod-api.ycpradiotelescope.com/";
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

export const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    error
  };
};

export const login = (email, password) => {
  this.set;
  return dispatch => {
    return axios
      .post(`${url}/login?email=${email}&password=${password}`)
      .then(response => {
        //AsyncStorage.setItem("user", JSON.stringify(response.data));
        alert(JSON.stringify(response));
        dispatch(loginSuccess(response.data));
      })
      .catch(error => {
        alert(error.response.data.message);
        dispatch(loginFailure(error.response.data));
      });
  };
};


