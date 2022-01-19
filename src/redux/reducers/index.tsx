import { combineReducers } from 'redux';
import { userReducer, currentProfileReducer, profilesReducer } from './user';
import catalogueReducer from './catalogue';
import { forum_reducer } from './support';


const rootReducer = combineReducers({
    user: userReducer,
    profile: currentProfileReducer,
    profiles: profilesReducer,
    catalogue: catalogueReducer,
    forum: forum_reducer
})

export * from './user';
export * from './catalogue';

export default rootReducer;