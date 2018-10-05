import { 
  REQUEST_USERS,
  RECEIVE_USERS,
  REQUEST_ALBUMS,
  RECEIVE_ALBUMS,
  REQUEST_PHOTOS,
  RECEIVE_PHOTOS,
  REQUEST_FAILED,
} from '../actions';

export const initialState = {
  isFetching: false,
  errorMessage: null,
  users: [],
  albums: [],
  photos: [],
};

export default (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_USERS:
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
        users: [],
      }
    case RECEIVE_USERS:
      const { users } = action;
      return {
        ...state,
        isFetching: false,
        users,
      }
    case REQUEST_ALBUMS:
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
        albums: [],
      }
    case RECEIVE_ALBUMS:
      const { albums } = action;
      return {
        ...state,
        isFetching: false,
        albums,
      }
    case REQUEST_PHOTOS:
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
        photos: [],
      }
    case RECEIVE_PHOTOS:
      const { photos } = action;
      return {
        ...state,
        isFetching: false,
        photos,
      }
    case REQUEST_FAILED:
      const { errorMessage } = action;
      return {
        ...state,
        isFetching: false,
        errorMessage,
      }
    default:
      return state;
  }
}
