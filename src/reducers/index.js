import {combineReducers} from 'redux';
import postReducers from './postReducers';
import postReducer2 from './postReducer2';
export default combineReducers({
    
    posts:postReducers,
    post2:postReducer2
});