import mockStore from 'redux-mock-store';
import {login} from '../src/screens/LoginScreen/AuthActions';
const store = mockStore() ;
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onPost('/login').reply(200, {
  users: [
    { id: 1, name: 'John Smith' }
  ]
});

axios.get('/users')
  .then(function(response) {
    console.log(response.data);
  });

describe('Testing log in authentication', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('attempt with correct password succeeds', async () => {
    await store.dispatch(login('enardo@ycp.edu', 'US.marines.2010'));
    expect(store.getActions()).toMatchSnapshot();
  });

  it('attempt with wrong password fails as expected', async () => {
    await store.dispatch(login('email@test.com', 'wrong'))
      .catch((error) => {
        const errorObject = { ...error };
        delete errorObject.duration;
        expect(errorObject).toMatchSnapshot();
      });
  });
});
