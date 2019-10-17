import { combineReducers } from "redux";

import {GET_USERS, GET_USERS_FAILURE, GET_USERS_SUCCESS} from "../actions/getUsersAction";

const INITIAL_STATE = {
    user:[],
    loading: false,
    error: false,
    errorMessage: null,
};

const getUsersReducer = (state = INITIAL_STATE, action) => {
    console.log("ACTION users", action);
    switch (action.type) {
        // Take all returned user info and put it in store
        case GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                errorMessage: null,
                user: action.user,
            };
        // Extract error message to display
        case GET_USERS_FAILURE:
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
    user: getUsersReducer
});
