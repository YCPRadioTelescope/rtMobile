import mockStore from 'redux-mock-store';
import {login} from '../src/screens/LoginScreen/AuthActions';
const store = mockStore();

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
