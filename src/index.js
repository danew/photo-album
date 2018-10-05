import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.dev';
import Users from './containers/Users';
import Albums from './containers/Albums';
import Photos from './containers/Photos';
import NotFound from './components/NotFound';

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/albums/:userId" component={Albums} />
          <Route path="/photos/:albumId" component={Photos} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);