import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import path from 'path';
import App from './containers/App';
import getInitialState from './getInitialState';
import configureStore from './store/configureStore';
import '../styles/base.scss';

const appRoot = path.join(__dirname, '..');
const store = configureStore(getInitialState());

const theme = {
  textColorInverse: '#fff',
  blue: '#42a5f5',
  textColor: '#4a4e52',
  darkBlue: '#0d8bf2',
  lightGray: '#efefef',
  darkGray: '#7d7d7d',
  mediumGray: '#bdbdbd',
};

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App appRoot={appRoot} />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app-root'),
);
