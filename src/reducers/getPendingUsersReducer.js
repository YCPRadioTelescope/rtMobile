import { combineReducers } from "redux";

import {GET_PENDING_USERS, GET_PENDING_USERS_FAILURE, GET_PENDING_USERS_SUCCESS} from "../actions/getPendingUsersAction";

const INITIAL_STATE = {
    pendingUser:[],
    loading: false,
    error: false,
    errorMessage: null,
};

const getPendingUsersReducer = (state = INITIAL_STATE, action) => {
    console.log("ACTION pendingusers", action);
    switch (action.type) {
        // Take all returned user info and put it in store
        case GET_PENDING_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                errorMessage: null,
                pendingUser: action.pendingUser,
            };
        // Extract error message to display
        case GET_PENDING_USERS_FAILURE:
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
    pendingUser: getPendingUsersReducer
});
