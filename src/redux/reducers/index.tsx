import { combineReducers } from 'redux';
import { userReducer } from './user.reducers';
// import { postReducer } from './post.reducers';

export const rootReducer = combineReducers({
  // post: postReducer
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;