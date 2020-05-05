import axios from "axios";
import config from "../../config";

const url = config.Webservice;

export const EMAIL = "EMAIL";
export const EMAIL_SUCCESS = "EMAIL_SUCCESS";
export const EMAIL_FAILURE = "EMAIL_FAILURE";

export const emailSuccess = user => {
  return {
    type: EMAIL_SUCCESS,
    user
  };
};

export const emailFailure = error => {
  return {
    type: EMAIL_FAILURE,
    error
  };
};

export const email = (destination, subject, message) => {
  let reqBody = {
    "UUID": config.UUID,
    "destination": destination ,
    "message": message,
    "subject": subject,
    };
  console.log(reqBody);
  return dispatch => {
    return axios
      .post(`${url}/email`,reqBody)
      .then(response => {
        //console.log(JSON.stringify(response));
        return dispatch(emailSuccess(response.data));
      })
      .catch(error => {
        console.log(error.response.data.message);
        return dispatch(emailFailure(error.response.data));
      });
  };
};
