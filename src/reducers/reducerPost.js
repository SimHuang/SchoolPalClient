import { FETCH_POSTS, CREATED_POST } from '../actions/types';

export default function(state=[], action) {
    switch(action.type) {
        case FETCH_POSTS:
            // console.log(action.response);
            return action.response;
        
        case CREATED_POST:
            return [
                ...state
            ]
        
        default:
            return state;
    }
} 