import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import path from 'path';
import App from './containers/App';
import getInitialState from './getInitialState';
import configureStore from './store/configureStore';
import '../styles/base.scss';

const appRoot = path.join(__dirname, '..');
const store = configureStore(getInitialState());

ReactDOM.render(
  <Provider store={store}>
    <App appRoot={appRoot} />
  </Provider>,
  document.getElementById('app-root'),
);
