import axios from "axios";
import { AsyncStorage } from "react-native";
import config from '../../config.json';


const url = "http://rtWebService.us-east-1.elasticbeanstalk.com";
//const url = "http:127.0.0.1:3000";
export const LOGIN = "LOGIN";
export const WEATHER_SUCCESS = "SENSOR_SUCCESS";
export const WEATHER_FAILURE = "SENSOR_FAILURE";

export const weatherSuccess = weather => {
    return {
        type: WEATHER_SUCCESS,
        weather
    };
};

export const weatherFailure = error => {
    return {
        type: WEATHER_FAILURE,
        error
    };
};

export const getWeatherData = ( ) => {
    let reqBody = {
        "UUID": config.UUID,
    };
    return dispatch => {
        return axios
            .post(`${url}/weather`, reqBody)
            .then(response => {
                //console.log(JSON.stringify(response));
                return dispatch(weatherSuccess(response.data));
            })
            .catch(error => {
                //console.log(error.response.data.message);
                return dispatch(weatherFailure(error.response.data));
            });
    };
};

