import axios from 'axios';
import config from "../config";
import "isomorphic-fetch";
import MockAdapter from 'axios-mock-adapter';
import {getUsers} from "../src/actions/getUsersAction";

let body = {
  "UUID": config.UUID
};

describe("correct api calls", () => {
  it('pendingUsers 200', async () => {

    const response = await fetch('http://rtWebService.us-east-1.elasticbeanstalk.com/pendingUsers', {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    expect(response.status).toBe(200);
  });

  it('users 200', async () => {

    const response = await fetch('http://rtWebService.us-east-1.elasticbeanstalk.com/users', {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    expect(response.status).toBe(200);
  });

  it('approveUser 200', async () => {

    const response = await fetch('http://rtWebService.us-east-1.elasticbeanstalk.com/approveUser', {
      method: "POST",
      body: JSON.stringify({
        "UUID": config.UUID,
        id: 1
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    expect(response.status).toBe(200);
  });

  it('denyUser 200', async () => {

    const response = await fetch('http://rtWebService.us-east-1.elasticbeanstalk.com/denyUser', {
      method: "POST",
      body: JSON.stringify({
        "UUID": config.UUID,
        id: 1
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    expect(response.status).toBe(200);
  });

  it('api-docs 200', async () => {

    const response = await fetch('http://rtWebService.us-east-1.elasticbeanstalk.com/api-docs');
    expect(response.status).toBe(200);
  });


});
