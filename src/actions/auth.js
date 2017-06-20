import axios from 'axios';

import { SIGN_UP, AUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3000';

/**
 * Action creator to be called when user signs up for new account
 */
export function signUpUser(user) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/api/v1/signup`, user)
        .then(response => {
            console.log('success');
            dispatch({type:AUTH_USER});
            localStorage.setItem(response.data.token);
        })
        .catch(error => {
            console.log(error);
        });
    }
}