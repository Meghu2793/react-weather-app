import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action){
    switch(action.type){
        case FETCH_WEATHER:
        //here we never want to manupulate the state object directly as we are not directly assigning 
        // anything to the state
        //state.push(action.payload.data) is wrong instead we can either concat or use "..." operator.
            return state.concat( [action.payload.data] );
            //return [action.payload.data, ...state];
    }
    return state;
} 