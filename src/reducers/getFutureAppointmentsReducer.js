import { combineReducers } from "redux";

import {FUTURE_APPOINTMENTS, GET_FUTURE_APPOINTMENTS_FAILURE, GET_FUTURE_APPOINTMENTS_SUCCESS} from "../actions/getFutureAppointmentAction";

const INITIAL_STATE = {
    futureAppointment:[],
    loading: false,
    error: false,
    errorMessage: null,
};

const getFutureAppointmentsReducer = (state = INITIAL_STATE, action) => {
   // console.log("ACTION appointments", action);
    switch (action.type) {
        // Take all returned user info and put it in store
        case GET_FUTURE_APPOINTMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                errorMessage: null,
                futureAppointment: action.futureAppointment,
            };
        // Extract error message to display
        case GET_FUTURE_APPOINTMENTS_FAILURE:
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
    appointment: getFutureAppointmentsReducer
});
