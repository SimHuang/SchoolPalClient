import { ANSWERED_THREAD, ANSWERING_THREAD } from '../actions/types';

let initialState = {
    isAnswering: false
}

export default function(state=initialState, action) {
    switch(action.type) {
        case ANSWERED_THREAD: 
            return {...state, isAnswering: action.payload.isAnswering}
        
        case ANSWERING_THREAD: 
            return {...state, isAnswering: action.payload.isAnswering}

        default:
            return state;
    }
}