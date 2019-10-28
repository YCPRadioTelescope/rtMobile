import axios from "axios";


const url = "http://rtWebService.us-east-1.elasticbeanstalk.com";
//const url = "http://127.0.0.1:3000";

export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const deleteUserSuccess = user => {
    return {
        type: DELETE_USER_SUCCESS,
        user
    };
};

export const deleteUserFailure = error => {
    return {
        type: DELETE_USER_FAILURE,
        error
    };
};

export const deleteUser = (id) => {
    let reqBody = {
        "id": id ,
    };
    return dispatch => {
        return axios
            .post(`${url}/deleteUser`,reqBody)
            .then(response => {
                console.log(JSON.stringify(response));
                return dispatch(deleteUserSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response.data.message);
                return dispatch(deleteUserFailure(error.response.data));
            });
    };
};
