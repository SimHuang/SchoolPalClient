import { combineReducers } from 'redux';
import reducerPost from './reducerPost';


const rootReducer = combineReducers({
    post: reducerPost
});

export default rootReducer;