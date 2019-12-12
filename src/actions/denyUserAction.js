import axios from "axios";
import config from "../../config";


//const url = "http://rtWebService.us-east-1.elasticbeanstalk.com";
//const url = "http://127.0.0.1:3000";
const url = "http:3.218.80.78";


export const DENY_USER_SUCCESS = "DENY_USER_SUCCESS";
export const DENY_USER_FAILURE = "DENY_USER_FAILURE";

export const denyUserSuccess = user => {
    return {
        type: DENY_USER_SUCCESS,
        user
    };
};

export const denyUserFailure = error => {
    return {
        type: DENY_USER_FAILURE,
        error
    };
};

export const denyUser = (id) => {
    let reqBody = {
        "id": id ,
        "UUID":config.UUID,
    };
    return dispatch => {
        return axios
            .post(`${url}/denyUser`,reqBody)
            .then(response => {
                //console.log(JSON.stringify(response));
                return dispatch(denyUserSuccess(response.data));
            })
            .catch(error => {
                console.log(error.response.data.message);
                return dispatch(denyUserFailure(error.response.data));
            });
    };
};
