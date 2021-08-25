import axios from "axios";
import { AsyncStorage } from "react-native";
import config from '../../config';

const url = config.Webservice;

export const LOGIN = "LOGIN";
export const SENSOR_SUCCESS = "SENSOR_SUCCESS";
export const SENSOR_FAILURE = "SENSOR_FAILURE";

export const sensorSuccess = sensor => {
    return {
        type: SENSOR_SUCCESS,
        sensor
    };
};

export const sensorFailure = error => {
    return {
        type: SENSOR_FAILURE,
        error
    };
};

export const getSensorData = ( ) => {
    let reqBody = {
        "UUID": config.UUID,
    };
    return dispatch => {
        return axios
            .post(`${url}/sensorStatus`, reqBody)
            .then(response => {
                //console.log(JSON.stringify('sensor response in action',response));
                return dispatch(sensorSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response.data.message);
                return dispatch(sensorFailure(error.response.data));
            });
    };
};

