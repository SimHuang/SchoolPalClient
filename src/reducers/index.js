import { combineReducers } from 'redux';
import reducerPost from './reducerPost';
import reducerAuth from './reducerAuth';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
    auth: reducerAuth,  //state holding the authentication
    post: reducerPost,  //state to hold the posts
    form: formReducer   //redux form
});

export default rootReducer;