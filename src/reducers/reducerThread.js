import { PREPARE_ANSWER, ANSWER_QUESTION } from '../actions/types';

let initialState = {
    answer: false
}

export default function(state=initialState, action) {
    switch(action.type) {
        case PREPARE_ANSWER: 
            return {...state, answer: action.payload}
        
        case ANSWER_QUESTION: 
            return {...state, currentModal: action.payload}

        default:
            return state;
    }
}