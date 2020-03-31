import axios from "axios";
import config from "../../config.json";

//const url = "http://rtWebService.us-east-1.elasticbeanstalk.com";
//const url = "http://127.0.0.1:3000";
const url = "http:3.218.80.78";


export const FUTURE_APPOINTMENTS = "FUTURE_APPOINTMENTS";
export const GET_FUTURE_APPOINTMENTS_SUCCESS = "GET_FUTURE_APPOINTMENTS_SUCCESS";
export const GET_FUTURE_APPOINTMENTS_FAILURE = "GET_FUTURE_APPOINTMENTS_FAILURE";

export const getFutureAppointmentsSuccess = futureAppointment => {
    return {
        type: GET_FUTURE_APPOINTMENTS_SUCCESS,
        futureAppointment
    };
};

export const getFutureAppointmentsFailure = error => {
    return {
        type: GET_FUTURE_APPOINTMENTS_FAILURE,
        error
    };
};

export const getFutureAppointments = () => {

    console.log('getfutureappointment action');
    let reqBody = {
        "UUID":config.UUID,
    };
    return dispatch => {
        axios.defaults.headers.common["Content-Type"] = "application/json";
        return axios
            .post(`${url}/futureAppointments`,reqBody)
            .then(response => {
                //console.log('inside axios returnnnnnnnnnn');
                //console.log(JSON.stringify(response));
                return dispatch(getFutureAppointmentsSuccess(response));
            })
            .catch(error => {
                console.log('error in action', error);
                dispatch(getFutureAppointmentsFailure(error.response));
            });
    };
};
