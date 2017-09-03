import _ from "lodash";
import {FETCH_BOOK} from '../actions/index';
export default function BookReducer(state=[],action){
    
    switch(action.type){
    
        case FETCH_BOOK:
        return  _.map(action.payload.data);
        default:

     return state;
    }
}