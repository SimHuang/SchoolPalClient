import axios from 'axios';

import { FETCH_SETTING, FETCHING_SETTING, FETCHED_SETTING } from './types';
import { showModal } from './modal';

import {ROOT_URL} from '../../config.js';

/**
 * Action to retrieve a user setting based on the Auth token. 
 * The auth token contains the information that
 */
export function retrieveUserSetting() {
    let token = localStorage.getItem('token');
    return function(dispatch) {
        dispatch({
                    type:FETCHING_SETTING, 
                    payload: {
                        isFetching: false
                    }
                });
                
        axios({
            method: 'get',
            url: `${ROOT_URL}/api/v1/user/profile`,
            headers: {
                'Authorization': token,
                'content-type': 'application/json'
            }
        })
        .then(response => {
            dispatch({
                        type: FETCHED_SETTING, 
                        payload: {
                            isRetrieving: false,
                            data: response.data
                        }
                    });
        })
        .catch(error => {
            //diaplay modal if error retrieving data
            console.log(error);
            // dispatch(showModal(SIGN_IN_MODAL));
        });
    }
}