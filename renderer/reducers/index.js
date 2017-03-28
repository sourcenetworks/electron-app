import { combineReducers } from 'redux';
import screen from './screenReducer';
import connection from './connectionReducer';
import hubReducer from './hubReducer';

const rootReducer = combineReducers({
  connection,
  currentScreen: screen,
  hub: hubReducer,
});

export default rootReducer;
