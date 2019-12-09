import axios from "axios";
import config from "../../config.json";

const url = "http://rtWebService.us-east-1.elasticbeanstalk.com";
//const url = "http://127.0.0.1:3000";

export const GET_PENDING_USERS_SUCCESS = "GET_PENDING_USERS_SUCCESS";
export const GET_PENDING_USERS_FAILURE = "GET_PENDING_USERS_FAILURE";

export const getPendingUsersSuccess = pendingUser => {
    return {
        type: GET_PENDING_USERS_SUCCESS,
        pendingUser
    };
};

export const getPendingUsersFailure = error => {
    return {
        type: GET_PENDING_USERS_FAILURE,
        error
    };
};

export const getPendingUsers = () => {

    console.log('getPendingUser action');
    let reqBody = {
        "UUID":config.UUID,
    };
    return dispatch => {
        axios.defaults.headers.common["Content-Type"] = "application/json";
        return axios
            .post(`${url}/pendingUsers`,reqBody)
            .then(response => {
                console.log(JSON.stringify(response));
                return dispatch(getPendingUsersSuccess(response));
            })
            .catch(error => {
                console.log('error in action', error);
                dispatch(getPendingUsersFailure(error.response));
            });
    };
};
