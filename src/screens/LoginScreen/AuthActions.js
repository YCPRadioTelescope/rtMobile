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
        AsyncStorage.setItem("user", {"email": email, "password": password});
        console.log(JSON.stringify(response));
        this.setState;
        return dispatch(loginSuccess(response.data));
      })
      .catch(error => {
        console.log(error.response.data.message);
        return dispatch(loginFailure(error.response.data));
      });
  };
};


