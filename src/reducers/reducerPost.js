import { FETCH_POSTS, CREATE_POST } from '../actions/types';

export default function(state=[], action) {
    switch(action.type) {
        case FETCH_POSTS:
            // console.log(action.response);
            return action.response;
        
        case CREATE_POST:
            console.log('creating post');
            return [
                ...state
            ]
        
        default:
            return state;
    }
} 