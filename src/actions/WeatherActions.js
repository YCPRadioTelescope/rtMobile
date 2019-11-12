import axios from "axios";


const url = "http://rtWebService.us-east-1.elasticbeanstalk.com";
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

export const getWeatherData = (email, password) => {

    return dispatch => {
        return axios
            .get(`${url}/weather`)
            .then(response => {
                //console.log(JSON.stringify(response));
                return dispatch(weatherSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response.data.message);
                return dispatch(weatherFailure(error.response.data));
            });
    };
};

