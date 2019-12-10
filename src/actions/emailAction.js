import axios from "axios";


const url = "http://rtWebService.us-east-1.elasticbeanstalk.com";
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
    "destination": destination ,
    "message": message,
    "subject": subject,
    };
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
