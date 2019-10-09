import { combineReducers } from "redux";

import {
    EMAIL,
    EMAIL_SUCCESS,
    EMAIL_FAILURE,
} from "../actions/emailAction";
import {GET_USERS, GET_USERS_FAILURE, GET_USERS_SUCCESS} from "../actions/getUsersAction";

const INITIAL_STATE = {
    id: null,
    first_name: null,
    last_name: null,
    email_address: null,
    company: null,
    phone_number: false,
    password: null,
    active: null,
    status: null,
};

const getUsersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Don't think this gets called
        case GET_USERS:
            return {
                ...state,
                loading: true
                //loader: true
            };
        // Take all returned user info and put it in store
        case GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoading: false,
                errorResponse: false,
            };
        // Extract error message to display
        case GET_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                isLoading: false,
                errorResponse: true,
                errorMessage: action.error
            };
        // Don't think this gets called
        default:
            return state;
    }
};

export default combineReducers({
    getUsers: getUsersReducer
});
