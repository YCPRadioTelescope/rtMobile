import { AsyncStorage } from "react-native";

import { combineReducers } from "redux";

import {
    WEATHER_SUCCESS,
    WEATHER_FAILURE,
} from "./WeatherActions";


const INITIAL_STATE = {
    weather: [
        {
          name: "WEATHER_NOT_FOUND",
          detail: "INITIAL_STATE"
        },
        {
            name: "WEATHER_NOT_FOUND",
            detail: "INITIAL_STATE"
        },
        {
            name: "WEATHER_NOT_FOUND",
            detail: "INITIAL_STATE"
        },
                ],
    loading: false,
    errorMessage: null,
    errorResponse: false
};

const weatherReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Take all returned user info and put it in store
        case WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                errorMessage: null,
                errorResponse: false,
                weather: action.weather,
            };
        // Extract error message to display
        case WEATHER_FAILURE:
            return {
                ...state,
                loading: false,
                errorResponse: true,
                errorMessage: action.error
            };
        // Don't think this gets called
        default:
            return state;
    }
};

export default combineReducers({
    weather: weatherReducer
});
