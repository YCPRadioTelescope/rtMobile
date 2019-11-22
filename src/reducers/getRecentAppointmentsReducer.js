import { combineReducers } from "redux";

import {GET_RECENT_APPOINTMENTS, GET_RECENT_APPOINTMENTS_FAILURE, GET_RECENT_APPOINTMENTS_SUCCESS} from "../actions/getRecentAppointmentActionAppointmentsAction";

const INITIAL_STATE = {
    recentAppointment:[],
    loading: false,
    error: false,
    errorMessage: null,
};

const getRecentAppointmentsReducer = (state = INITIAL_STATE, action) => {
    console.log("ACTION appointments", action);
    switch (action.type) {
        // Take all returned user info and put it in store
        case GET_RECENT_APPOINTMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                errorMessage: null,
                recentAppointment: action.recentAppointment,
            };
        // Extract error message to display
        case GET_RECENT_APPOINTMENTS_FAILURE:
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
    user: getRecentAppointmentsReducer
});
