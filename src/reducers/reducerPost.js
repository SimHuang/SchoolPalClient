import { FETCH_POST } from '../actions';

let post = [
        {username: 'sam', school: 'stony brook university', post:'sample post', date: '10/21/2016', upvotes:5},
        {username: 'Kelly', school: 'Carneige Mellon university', post:'Hello world', date: '05/21/2017', upvotes:32},
        {username: 'kevin', school: 'Binghamton university', post:'how do i get to school', date: '01/19/2016', upvotes:123},
        {username: 'Alpham', school: 'Baruch College', post:'I hate business', date: '01/23/2016', upvotes:21},
        {username: 'chicken', school: 'Baruch College', post:'i want to make some money', date: '01/25/2016', upvotes:12},
    ]

export default function(state=post, action) {
    switch(action.type) {
        case FETCH_POST:
            return {...state};
        
        default:
            return state;
    }
} 