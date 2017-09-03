import { FETCH_POSTS,
         CREATED_POST,
         FETCH_POST } from '../actions/types';

export default function(state={}, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {...state, posts:action.response}

        case FETCH_POST: 
            //give up the state of all posts it is not needed
            return {selected:action.response};
            // return { ...state, selected: action.response}
        
        case CREATED_POST:
            return {...state};
        
        default:
            return state;
    }
} 