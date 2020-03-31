import axios from "axios";
import { AsyncStorage } from "react-native";
import config from "../../config";


//const url = "http:127.0.0.1:3000";
//const url = "http://rtWebService.us-east-1.elasticbeanstalk.com";
const url = "http:3.218.80.78";


export const LOGIN = "LOGIN";
export const OVERRIDE_SUCCESS = "SENSOR_SUCCESS";
export const OVERRIDE_FAILURE = "SENSOR_FAILURE";

export const overrideSuccess = sensor => {
    return {
        type: OVERRIDE_SUCCESS,
        sensor
    };
};

export const overrideFailure = error => {
    return {
        type: OVERRIDE_FAILURE,
        error
    };
};

export const setOverride = (sensor, setting) => {
    let reqBody = {
        "UUID": config.UUID,
        "name": sensor,
        "override": setting
    };


    return dispatch => {
        return axios
            .post(`${url}/setOverride`,reqBody)
            .then(response => {
                //console.log(JSON.stringify(response));
                return dispatch(overrideSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response.data.message);
                return dispatch(overrideFailure(error.response.data));
            });
    };
};
