import axios from "axios";

const url = "http://YcpTelesopeWebService-env.mbdnxjscuy.us-east-1.elasticbeanstalk.com";
export const CREATE_INACTIVE_USER_SUCCESS = "CREATE_INACTIVE_USER_SUCCESS";
export const CREATE_INACTIVE_USER_FAILURE = "CREATE_INACTIVE_USER_FAILURE";

export const createInactiveUserSuccess = user => {
    return {
        type: CREATE_INACTIVE_USER_SUCCESS,
        user
    };
};

export const createInactiveUserFailure = error => {
    return {
        type: CREATE_INACTIVE_USER_FAILURE,
        error
    };
};

export const createInactiveUser = (first_name, last_name, email_address, password) => {
    let reqBody = {
        "first_name": first_name ,
        "last_name": last_name,
        "email_address": email_address,
        "password": password,
    };
    return dispatch => {
        return axios
            .post(`${url}/createInactiveUser`,reqBody)
            .then(response => {
                console.log(JSON.stringify(response));
                return dispatch(createInactiveUserSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response.data.message);
                return dispatch(createInactiveUserFailure(error.response.data));
            });
    };
};
