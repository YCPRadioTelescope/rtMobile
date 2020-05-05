import axios from "axios";
import config from "../../config.json";

const url = config.Webservice;


export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export const getUsersSuccess = user => {
    return {
        type: GET_USERS_SUCCESS,
        user
    };
};

export const getUsersFailure = error => {
    return {
        type: GET_USERS_FAILURE,
        error
    };
};

export const getUsers = () => {

    console.log('getuser action');
    let reqBody = {
        "UUID":config.UUID,
    };
    return dispatch => {
        axios.defaults.headers.common["Content-Type"] = "application/json";
        return axios
            .post(`${url}/users`,reqBody)
            .then(response => {
                //console.log(JSON.stringify(response));
                return dispatch(getUsersSuccess(response));
            })
            .catch(error => {
                console.log('error in action', error);
                dispatch(getUsersFailure(error.response));
            });
    };
};
