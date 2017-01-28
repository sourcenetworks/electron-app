import { combineReducers } from 'redux';
import screen from './screenReducer';
import connection from './connectionReducer';

const rootReducer = combineReducers({
  connection,
  currentScreen: screen,
});

export default rootReducer;
