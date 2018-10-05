import reducer, { initialState } from './index';
import * as actions from '../actions';

describe('reducer', () => {
  it('should provide the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  })

  it('should handle RECEIVE_USERS', () => {
    expect(reducer(undefined, {
      type: actions.RECEIVE_USERS,
      users: [{ id:1, name: 'test' }]
    })).toEqual({
      ...initialState,
      users: [{ id:1, name: 'test' }]
    });
  })

  it('should handle RECEIVE_ALBUMS', () => {
    expect(reducer(undefined, {
      type: actions.RECEIVE_ALBUMS,
      albums: [{ id:1, title: 'test' }]
    })).toEqual({
      ...initialState,
      albums: [{ id:1, title: 'test' }]
    });
  })

  it('should handle RECEIVE_PHOTOS', () => {
    expect(reducer(undefined, {
      type: actions.RECEIVE_PHOTOS,
      photos: [{ id:1, name: 'test' }]
    })).toEqual({
      ...initialState,
      photos: [{ id:1, name: 'test' }]
    });
  })

  it('should handle REQUEST_FAILED', () => {
    expect(reducer(undefined, {
      type: actions.REQUEST_FAILED,
      errorMessage: 'An error has occurred!'
    })).toEqual({
      ...initialState,
      errorMessage: 'An error has occurred!'
    });
  })
})