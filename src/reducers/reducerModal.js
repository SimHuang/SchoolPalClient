import { SHOW_MODAL, HIDE_MODAL } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case SHOW_MODAL:
            console.log('arrived here');
            console.log(action.payload);
            return {money: action.payload}

        case HIDE_MODAL:
            return state

        default: 
            return state;
    }
}