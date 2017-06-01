import { FETCH_POST } from './types';

/**
 * action to fetch all posts from database
 */
export function fetchPost() {
    return {
        type: FETCH_POST,
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