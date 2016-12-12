import { combineReducers } from 'redux';
import todos from './todos';
import historyItems from './history';

const shoppingApp = combineReducers({
  todos,
  historyItems 
});

export default shoppingApp;
