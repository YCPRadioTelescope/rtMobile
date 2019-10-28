import { combineReducers } from "redux";
import {APPROVE_USER_SUCCESS} from "../actions/approveUserAction";

let INITIAL_STATE ={
    "id": null ,
};

const approveUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Take all returned user info and put it in store
        case APPROVE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoading: false,
                errorResponse: false,
            };
        // Extract error message to display
        case APPROVE_USER_FAILURE:
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
    approveUser: approveUserReducer
});
