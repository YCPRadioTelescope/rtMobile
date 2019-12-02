import axios from "axios";
import config from "../../config.json";

const url = "http://rtWebService.us-east-1.elasticbeanstalk.com";
//const url = "http://127.0.0.1:3000";

export const APPOINTMENTS = "APPOINTMENTS";
export const GET_APPOINTMENTS_SUCCESS = "GET_APPOINTMENTS_SUCCESS";
export const GET_APPOINTMENTS_FAILURE = "GET_APPOINTMENTS_FAILURE";

export const getAppointmentsSuccess = appointment => {
    return {
        type: GET_APPOINTMENTS_SUCCESS,
        appointment
    };
};

export const getAppointmentsFailure = error => {
    return {
        type: GET_APPOINTMENTS_FAILURE,
        error
    };
};

export const getAppointment = () => {

    console.log('getappointment action');
    let reqBody = {
        "UUID":config.UUID,
    };
    return dispatch => {
        axios.defaults.headers.common["Content-Type"] = "application/json";
        return axios
            .post(`${url}/appointments`,reqBody)
            .then(response => {
                console.log('inside axios returnnnnnnnnnn');
                console.log(JSON.stringify(response));
                return dispatch(getAppointmentsSuccess(response));
            })
            .catch(error => {
                console.log('error in action', error);
                dispatch(getAppointmentsFailure(error.response));
            });
    };
};
