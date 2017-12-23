import { SHOW_MODAL, HIDE_MODAL } from '../actions/types';

let initialiState = {
    payload: null
}

export default function(state = initialiState, action) {
    switch(action.type) {
        case SHOW_MODAL:
            return {...state, payload: action.payload.modal}

        case HIDE_MODAL:
            return {...state, payload: action.payload.modal}

        default: 
            return state;
    }
}