import { combineReducers } from "redux";
import {DENY_USER_SUCCESS} from "../actions/denyUserAction";

let INITIAL_STATE ={
    "id": null ,
};

const denyUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Take all returned user info and put it in store
        case DENY_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoading: false,
                errorResponse: false,
            };
        // Extract error message to display
        case DENY_USER_FAILURE:
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
    denyUser: denyUserReducer
});
