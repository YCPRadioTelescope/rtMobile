import { AsyncStorage } from "react-native";

import { combineReducers } from "redux";

import {
    SENSOR_SUCCESS,
    SENSOR_FAILURE,
} from "./SensorActions";

const INITIAL_STATE = {
    sensor: [{name: "INITIAL_STATE", details: "INITIAL_STATE"}],
    loading: false,
    errorMessage: null,
    errorResponse: false
};

const sensorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Take all returned user info and put it in store
        case SENSOR_SUCCESS:
            return {
                ...state,
                loading: false,
                errorMessage: null,
                errorResponse: false,
                sensor: action.sensor,
            };
        // Extract error message to display
        case SENSOR_FAILURE:
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
    sensor: sensorReducer
});
