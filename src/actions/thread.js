//this thread action is responsible for all actions when user clicks on a post
import axios from 'axios';

import {FETCH_POST, PREPARE_ANSWER, ANSWER_QUESTION, SHOW_MODAL} from './types';
import {ROOT_URL} from '../../config.js';

/**
 * action creator to display the answer post component
 */
export function toggleAnswerComponent(status) {
    return {
        type: PREPARE_ANSWER,
        payload: {
            toAnswer: status
        }
    }
}

/**
 * fetch single post base on post id
 */
export function fetchSpecificPost(id) {
    let token = localStorage.getItem('token');
    return function(dispatch) {
        axios.get(`${ROOT_URL}/api/v1/post/${id}`, {
            headers: {
                'Authorization': token
            }
        })
        .then(response => {
            dispatch({type: FETCH_POST, response: response.data});
        })
        .catch(error => {
            console.log(error);
        });
    }
}

/**
 * return the type answer question to fetch answer
 */
export function fetchAnswerQuestionModal() {
    console.log('showing answer question modal through action');
    return {
        type: SHOW_MODAL,
        payload: 'SHOW_MODAL'
    }
}