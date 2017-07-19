import axios from 'axios';

import { CREATE_POST, FETCH_POSTS } from './types';

const ROOT_URL = 'http://localhost:3000';

let posts = [
        {username: 'sam', school: 'stony brook university', post:'sample post', date: '10/21/2016', upvotes:5},
        {username: 'Kelly', school: 'Carneige Mellon university', post:'Hello world', date: '05/21/2017', upvotes:32},
        {username: 'kevin', school: 'Binghamton university', post:'how do i get to school', date: '01/19/2016', upvotes:123},
        {username: 'Alpham', school: 'Baruch College', post:'I hate business', date: '01/23/2016', upvotes:21},
        {username: 'chicken', school: 'Baruch College', post:'i want to make some money', date: '01/25/2016', upvotes:12},
        {username: 'sam', school: 'stony brook university', post:'sample post', date: '10/21/2016', upvotes:5},
        {username: 'Kelly', school: 'Carneige Mellon university', post:'Hello world', date: '05/21/2017', upvotes:32},
        {username: 'kevin', school: 'Binghamton university', post:'how do i get to school', date: '01/19/2016', upvotes:123},
        {username: 'Alpham', school: 'Baruch College', post:'I hate business', date: '01/23/2016', upvotes:21},
        {username: 'chicken', school: 'Baruch College', post:'i want to make some money', date: '01/25/2016', upvotes:12},
        {username: 'sam', school: 'stony brook university', post:'sample post', date: '10/21/2016', upvotes:5},
        {username: 'Kelly', school: 'Carneige Mellon university', post:'Hello world', date: '05/21/2017', upvotes:32},
        {username: 'kevin', school: 'Binghamton university', post:'how do i get to school', date: '01/19/2016', upvotes:123},
        {username: 'Alpham', school: 'Baruch College', post:'I hate business', date: '01/23/2016', upvotes:21},
        {username: 'chicken', school: 'Baruch College', post:'i want to make some money', date: '01/25/2016', upvotes:12},
 
    ]

/**
 * action to fetch all posts from database
 */
export function fetchPost() {
    console.log('fetching all posts');
    return {
        type: FETCH_POSTS,
        payload: posts
    };
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