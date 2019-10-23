import axios from "axios";
import { AsyncStorage } from "react-native";


const url = "http:127.0.0.1:3000";
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

export const getSensorData = (email, password) => {

    return dispatch => {
        return axios
            .get(`${url}/sensorStatus`)
            .then(response => {
                //console.log(JSON.stringify(response));
                return dispatch(sensorSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response.data.message);
                return dispatch(sensorFailure(error.response.data));
            });
    };
};

