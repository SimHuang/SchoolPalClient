import { FETCH_POST } from './types';

/**
 * action to fetch all posts from database
 */
export function fetchPost() {
    let post = [
        {username: 'pusybitchface', school: 'stony brook university', post:'sample post', date: '10/21/2016', upvotes: '3'},
        {username: 'Kelly', school: 'Carneige Mellon university', post:'Hello world', date: '05/21/2017', upvotes: 2},
        {username: 'kevin', school: 'Binghamton university', post:'how do i get to school', date: '01/19/2016', upvotes:123},
        {username: 'Alpham', school: 'Baruch College', post:'I hate business', date: '01/23/2016', upvotes:23},
        {username: 'chicken', school: 'Baruch College', post:'i want to make some money', date: '01/25/2016', upvotes: 21},
    ]

    return {
        type: FETCH_POST,
        post
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