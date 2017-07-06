import axios from 'axios';

import { SIGN_UP, AUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'http://localhost:3000';

/**
 * Action creator to be called when user signs up for new account
 */
export function signUpUser(user, callback) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/api/v1/signup`, user)
            .then(response => {
                dispatch({type:AUTH_USER});
                localStorage.setItem('token',response.data.token);
                callback();
            })
            .catch(error => {
                dispatch({type:AUTH_ERROR, response: error.response});
            });
    }
}

/**
 * Action creator to be called when user attempts to login with existing account
 */
export function signInUser() {
    
}

/**
 * action creator to be called when user attempts to log out of application
 */
export function signOutUser() {

}