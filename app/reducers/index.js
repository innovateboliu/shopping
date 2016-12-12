import { combineReducers } from 'redux';
import todos from './todos';

const shoppingApp = combineReducers({
    todos
});

export default shoppingApp;
