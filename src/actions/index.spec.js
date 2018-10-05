import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { initialState } from '../reducers';
import * as actions from '../actions';
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const headers = { 'content-type': 'application/json' };

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  })

  it('creates REQUEST_USERS and RECEIVE_USERS when calling fetchUsersIfNeeded', () => {
    fetchMock.getOnce('https://jsonplaceholder.typicode.com/users', { 
      body: [{ id:1, name: 'test' }], 
      headers
    });

    const expectedActions = [
      { type: actions.REQUEST_USERS },
      { type: actions.RECEIVE_USERS, users: [{ id:1, name: 'test' }] }
    ]
    const store = mockStore(initialState);

    return store.dispatch(actions.fetchUsersIfNeeded()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates REQUEST_USERS and REQUEST_FAILED when calling fetchUsersIfNeeded with a bad connection', () => {
    fetchMock.getOnce('https://jsonplaceholder.typicode.com/users', { 
      throws: new Error("Doesn't work"),
      headers
    });

    const expectedActions = [
      { type: actions.REQUEST_USERS },
      { type: actions.REQUEST_FAILED, errorMessage: 'Failed retrieving the Users, please try again later' }
    ]
    const store = mockStore(initialState);

    return store.dispatch(actions.fetchUsersIfNeeded()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

})