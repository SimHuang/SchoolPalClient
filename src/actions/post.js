import axios from 'axios';

import { CREATED_POST,
         CREATING_POST, 
         FETCH_POSTS } from './types';

const ROOT_URL = 'http://localhost:3000';

/**
 * action to fetch all posts from database
 */
export function fetchPost() {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/api/v1/post/search`, {
            "limit": 20
        })
        .then(response => {
            dispatch({type: FETCH_POSTS, response: response.data});
        })
        .catch(error => {
            console.log(error);
        });
    }
}

/**
 * create a post
 */
export function createPost(post, callback) {
    return function(dispatch) {
        //DISPATCH CREATING
        let token = localStorage.getItem('token');
        dispatch({type: CREATING_POST});
        console.log(post);
        axios({
            method: 'post',
            url: `${ROOT_URL}/api/v1/post/new`,
            data: {
                question: post.question,
                tags: post.tag,
                author: 'Simon Huang',
                post: post.post
            },
            headers: {
                'Authorization': token,
                'content-type': 'application/json'
            }
        })
        .then(response => {
            //TODO: API CALL TO GET USER INFO
            dispatch({type:CREATED_POST, payload: response.data});
            callback();
        })
        .catch(error => {
            console.log(error);
        })
    }
}