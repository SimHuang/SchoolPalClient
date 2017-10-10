import { PREPARE_ANSWER } from '../actions/types';

let initialState = {
    answer: false
}

export default function(state=initialState, action) {
    switch(action.type) {
        case PREPARE_ANSWER: 
            console.log(action.payload);
            return {...state, answer: action.payload}
        
        default:
            return state;
    }
}