import { combineReducers } from "redux";

import {OVERRIDE_FAILURE} from "../actions/OverrideActions";
import {OVERRIDE_SUCCESS} from "../actions/OverrideActions";

let INITIAL_STATE ={
    "id": null ,
};

const overrideReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Take all returned user info and put it in store
        case OVERRIDE_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoading: false,
                errorResponse: false,
            };
        // Extract error message to display
        case OVERRIDE_FAILURE:
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
    override: overrideReducer
});
