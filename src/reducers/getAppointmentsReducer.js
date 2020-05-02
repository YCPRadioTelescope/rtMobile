import { combineReducers } from "redux";

import {APPOINTMENTS, GET_APPOINTMENTS_FAILURE, GET_APPOINTMENTS_SUCCESS} from "../actions/getAppointmentAction";

const INITIAL_STATE = {
    appointment:[],
    loading: false,
    error: false,
    errorMessage: null,
};

const getAppointmentsReducer = (state = INITIAL_STATE, action) => {
    //console.log("ACTION appointments", action);
    switch (action.type) {
        // Take all returned user info and put it in store
        case GET_APPOINTMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                errorMessage: null,
                appointment: action.appointment,
            };
        // Extract error message to display
        case GET_APPOINTMENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: action.error
            };
        // Don't think this gets called
        default:
            return state;
    }
};

export default combineReducers({
    appointment: getAppointmentsReducer
});
