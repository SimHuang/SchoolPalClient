import { combineReducers } from 'redux';
import reducerPost from './reducerPost';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
    post: reducerPost,
    form: formReducer
});

export default rootReducer;