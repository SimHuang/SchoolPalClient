import { combineReducers } from 'redux';
import reducerPost from './reducerPost';
import reducerAuth from './reducerAuth';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
    auth: reducerAuth,
    post: reducerPost,
    form: formReducer
});

export default rootReducer;