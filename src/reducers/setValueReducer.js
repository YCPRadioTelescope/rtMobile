import { combineReducers } from "redux";


import {SETVALUE_SUCCESS} from "../actions/setValueAction";
import {SETVALUE_FAILURE} from "../actions/setValueAction";

let INITIAL_STATE ={
    "id": null ,
};

const setValueReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Take all returned user info and put it in store
        case SETVALUE_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoading: false,
                errorResponse: false,
            };
        // Extract error message to display
        case SETVALUE_FAILURE:
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
 setValue: setValueReducer
});
