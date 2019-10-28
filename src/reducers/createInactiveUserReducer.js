import { combineReducers } from "redux";

import {
    CREATE_INACTIVE_USER_SUCCESS,
    CREATE_INACTIVE_USER_FAILURE,
} from "../actions/createInactiveUserAction";

let INITIAL_STATE ={
    "first_name": null ,
    "last_name": null,
    "email_address": null,
    "password": null,
};

const createInactiveUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Don't think this gets called
        // Take all returned user info and put it in store
        case CREATE_INACTIVE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoading: false,
                errorResponse: false,
            };
        // Extract error message to display
        case CREATE_INACTIVE_USER_FAILURE:
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
    createInactiveUser: createInactiveUserReducer
});
