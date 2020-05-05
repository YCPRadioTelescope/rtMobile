import axios from "axios";
import config from "../../config.json";

const url = config.Webservice;

export const RECENT_APPOINTMENTS = "RECENT_APPOINTMENTS";
export const GET_RECENT_APPOINTMENTS_SUCCESS = "GET_RECENT_APPOINTMENTS_SUCCESS";
export const GET_RECENT_APPOINTMENTS_FAILURE = "GET_RECENT_APPOINTMENTS_FAILURE";

export const getRecentAppointmentsSuccess = recentAppointment => {
    return {
        type: GET_RECENT_APPOINTMENTS_SUCCESS,
        recentAppointment
    };
};

export const getRecentAppointmentsFailure = error => {
    return {
        type: GET_RECENT_APPOINTMENTS_FAILURE,
        error
    };
};

export const getRecentAppointments = () => {

    console.log('getrecentappointment action');
    let reqBody = {
        "UUID":config.UUID,
    };
    return dispatch => {
        axios.defaults.headers.common["Content-Type"] = "application/json";
        return axios
            .post(`${url}/recentAppointments`,reqBody)
            .then(response => {
                //console.log('inside axios returnnnnnnnnnn');
                //console.log(JSON.stringify(response));
                return dispatch(getRecentAppointmentsSuccess(response));
            })
            .catch(error => {
                console.log('error in action', error);
                dispatch(getRecentAppointmentsFailure(error.response));
            });
    };
};
