import { combineReducers } from 'redux';
import reducerPost from './reducerPost';
import reducerAuth from './reducerAuth';
import reducerThread from './reducerThread';
import reducerModal from './reducerModal';
import { reducer as formReducer } from 'redux-form';
import { UNAUTH_USER } from '../actions/types';

//the default combined reducer to return to user unless user logs out
const appReducer = combineReducers({
    auth: reducerAuth,  //state holding the authentication
    post: reducerPost,  //state to hold the posts
    form: formReducer,   //redux form
    thread: reducerThread, //holds the state for a post thread
    modal: reducerModal, //this just holds a single variable indication which modal is up initally null
});

const rootReducer = (state, action) => {
    //clear the state if user logs out
    if(action.type === UNAUTH_USER) {
        state = undefined
    }

    return appReducer(state, action);
};

export default rootReducer;