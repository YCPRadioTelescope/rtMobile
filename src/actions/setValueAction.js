import axios from "axios";
import { AsyncStorage } from "react-native";
import config from "../../config";


//const url = "http:127.0.0.1:3000";
//const url = "http://rtWebService.us-east-1.elasticbeanstalk.com";
const url = "http:3.218.80.78";


export const LOGIN = "LOGIN";
export const SETVALUE_SUCCESS = "SETVALUE_SUCCESS";
export const SETVALUE_FAILURE = "SETVALUE_FAILURE";

export const setValueSuccess = sensor => {
    return {
        type: SETVALUE_SUCCESS,
        sensor
    };
};

export const setValueFailure = error => {
    return {
        type: SETVALUE_FAILURE,
        error
    };
};

export const setValue = (sensor, setting) => {
    let reqBody = {
        "UUID": config.UUID,
        "name": sensor,
        "value": setting
    };


    return dispatch => {
        return axios
            .post(`${url}/setValue`,reqBody)
            .then(response => {
                //console.log(JSON.stringify(response));
                return dispatch(setValueSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response.data.message);
                return dispatch(setValueFailure(error.response.data));
            });
    };
};
