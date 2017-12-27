//this thread action is responsible for all actions when user clicks on a post
import axios from 'axios';
import ReactDOM from 'react-dom';

import {FETCH_POST, 
        PREPARE_ANSWER, 
        SHOW_MODAL, 
        HIDE_MODAL,
        ANSWERING_THREAD,
        ANSWERED_THREAD} from './types';
import {ROOT_URL} from '../../config.js';

//THIS FILE CONTAINS ALL THE ACTION CREATORS FOR A THREAD COMPONENT
// E.G: ANSWER, FETCH SINGLE POST, LIKE, ETC.

/**
 * action creator to display the answer post component
 * deprecated
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
 * The action creater that is called when user answers a question.
 * The user must be logged in.
 */
export function postAnswerForThread(content, callback) {
    let token = localStorage.getItem('token');
    return function(dispatch) {
        dispatch({type: ANSWERING_THREAD, payload: {isAnswering: true}});
        axios({
            method: 'post',
            url: `${ROOT_URL}/api/v1/post/answer`,
            data: content,
            headers: {
                'Authorization': token,
                'content-type': 'application/json'
            }
        })
        .then(response => {
            dispatch({type: ANSWERED_THREAD, payload: {isAnswering: false}})
            callback(); //this callback should close the modal
        })
        .catch(error => {
            console.log(error);
            dispatch({type: ANSWERED_THREAD, payload: {isAnswering: false}})
        });
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

