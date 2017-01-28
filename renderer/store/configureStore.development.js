/* eslint-disable import/no-extraneous-dependencies */
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import rootReducer from '../reducers';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const enhancer = compose(
  applyMiddleware(thunk, reduxPackMiddleware, logger),
  devTools({
    name: 'Electron',
    hostname: 'localhost',
    port: 8000,
  }),
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    // eslint-disable-next-line global-require
    module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers')));
  }

  return store;
}
