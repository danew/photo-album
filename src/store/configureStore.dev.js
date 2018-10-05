import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';

const configureStore = () => {
  const store = createStore(
    reducers,
    composeWithDevTools(
      applyMiddleware(
        thunk, 
        createLogger()
      ),
    ),
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(reducers);
    });
  }

  return store;
}

export default configureStore;