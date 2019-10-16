import axios from "axios";


const url = "http://YcpTelesopeWebService-env.mbdnxjscuy.us-east-1.elasticbeanstalk.com";
export const GET_USERS = "GET_USERS";
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
    /*let reqBody = {
        "destination": destination ,
        "message": message,
        "subject": subject,
    };*/
    return dispatch => {
        return axios
            .get(`${url}/user`)
            .then(response => {
                console.log(JSON.stringify(response));
                return dispatch(getUsersSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response.data.message);
                return dispatch(getUsersFailure(error.response.data));
            });
    };
};
