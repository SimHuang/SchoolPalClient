import { combineReducers } from 'redux';
import reducerPost from './reducerPost';
import reducerAuth from './reducerAuth';
import reducerThread from './reducerThread';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
    auth: reducerAuth,  //state holding the authentication
    post: reducerPost,  //state to hold the posts
    form: formReducer,   //redux form
    thread: reducerThread //holds the state for a post thread
});

export default rootReducer;