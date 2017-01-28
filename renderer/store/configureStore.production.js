import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import rootReducer from '../reducers';

const enhancer = applyMiddleware(thunk, reduxPackMiddleware);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
