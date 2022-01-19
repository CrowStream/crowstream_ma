import { combineReducers } from 'redux';
import userReducer from './user';
import catalogueReducer from './catalogue';
import { forum_reducer } from './support';


const rootReducer = combineReducers({
    user: userReducer,
    catalogue: catalogueReducer,
    forum: forum_reducer
})

export * from './user';
export * from './catalogue';

export default rootReducer;