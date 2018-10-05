import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const configureStore = () => {
  const store = createStore(
    reducers,
    compose(
      applyMiddleware(thunk),
    ),
  );
  return store;
}

export default configureStore;