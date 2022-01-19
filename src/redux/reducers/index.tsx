import { combineReducers } from 'redux';
import userReducer from './user';
import { forum_reducer } from './support';


const rootReducer = combineReducers({
    user: userReducer,
    forum: forum_reducer
})

export * from './user';

export default rootReducer;