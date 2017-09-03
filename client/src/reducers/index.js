import {combineReducers} from 'redux';
import BookReducer from './reducer_book';

const rootReducer= combineReducers({
    book: BookReducer
});
export default rootReducer;
