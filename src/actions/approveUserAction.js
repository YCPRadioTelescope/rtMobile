import axios from "axios";
import config from "../../config";


const url = "http://rtWebService.us-east-1.elasticbeanstalk.com";
//const url = "http://127.0.0.1:3000";

export const APPROVE_USER_SUCCESS = "APPROVE_USER_SUCCESS";
export const APPROVE_USER_FAILURE = "APPROVE_USER_FAILURE";

export const approveUserSuccess = user => {
    return {
        type: APPROVE_USER_SUCCESS,
        user
    };
};

export const approveUserFailure = error => {
    return {
        type: APPROVE_USER_FAILURE,
        error
    };
};

export const approveUser = (id) => {
    let reqBody = {
        "id": id ,
        "UUID":config.UUID,
    };
    return dispatch => {
        return axios
            .post(`${url}/approveUser`,reqBody)
            .then(response => {
                //console.log(JSON.stringify(response));
                return dispatch(approveUserSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response.data.message);
                return dispatch(approveUserFailure(error.response.data));
            });
    };
};
