import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case AUTH_USER:
            return {...state, error: '', authenticated: true};
        case AUTH_ERROR:
            return {...state, error: action.response, authenticated: false};
            // return Object.assign({}, state, {error: 'Error creating account'});
        case UNAUTH_USER:
            return { message: 'user logged out', authenticated:false};
        default: 
            return state;
    }
}