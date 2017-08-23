import axios from 'axios';

import { CREATE_POST, FETCH_POSTS } from './types';

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
            dispatch({type:'error'});
        });
    }
}

/**
 * create a post
 */
export function createPost(post) {
    console.log('Post in action:')
    console.log(post);
    posts.push(post);
    return {
        type: CREATE_POST,
        payload: 'creeated'
    }
}