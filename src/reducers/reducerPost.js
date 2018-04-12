import { FETCH_POSTS,
         CREATED_POST,
         FETCHED_SINGLE_POST,
         FETCHING_SINGLE_POST, 
         FETCH_SINGLE_POST_FAILED} from '../actions/types';

let initialState = {
    isLoadingPost: true,
    selected: null
}

export default function(state=initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            return {...state, posts:action.response}

        case FETCHED_SINGLE_POST: 
            return {...state, selected:action.response, isLoadingPost: action.isLoadingPost};
        
        case FETCHING_SINGLE_POST: 
            return {...state, isLoadingPost: true}
        
        case FETCH_SINGLE_POST_FAILED:
            return {...state, isLoadingPost: action.isLoadingPost}
        
        case CREATED_POST:
            return {...state};
        
        default:
            return state;
    }
} 