import axios from "axios";


const url = "http://rtWebService.us-east-1.elasticbeanstalk.com";
//const url = "http://127.0.0.1:3000";

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
    return dispatch => {
        axios.defaults.headers.common["Content-Type"] = "application/json";
        return axios
            .get(`${url}/pendingUsers`)
            .then(response => {
                console.log('inside axios return');
                console.log(JSON.stringify(response));
                return dispatch(getUsersSuccess(response));
            })
            .catch(error => {
                console.log('error in action', error);
                dispatch(getUsersFailure(error.response));
            });
    };
};
