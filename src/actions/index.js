import axios from 'axios';

import { AUTH_USER, FETCH_POSTS, CREATE_POST } from './types';

const root_url = 'http://localhost:3000';


/**
 * action to fetch all posts from database
 */
export function fetchPost() {
    return {
        type: FETCH_POSTS,
    };
}

/**
 * create a post
 */
export function createPost(post) {
    return {
        type: CREATE_POST,
        post
    }
}