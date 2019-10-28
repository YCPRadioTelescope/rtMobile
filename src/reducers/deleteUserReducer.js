import { combineReducers } from "redux";
import {DELETE_USER_SUCCESS} from "../actions/deleteUserAction";

let INITIAL_STATE ={
    "id": null ,
};

const deleteUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Take all returned user info and put it in store
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoading: false,
                errorResponse: false,
            };
        // Extract error message to display
        case DELETE_USER_FAILURE:
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
    deleteUser: deleteUserReducer
});
