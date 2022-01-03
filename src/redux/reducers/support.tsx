/**
 * Support Reducers
 */

// Redux Toolkit
import {
    CaseReducerActions,
    createSlice,
    PayloadAction,
    Slice,
    SliceCaseReducers
} from '@reduxjs/toolkit';

// Redux
import {
    AnyAction,
    Reducer
} from 'redux';

// Crowstream
import { Comment, Forum, Post } from '../types';


// Initial state of forum slice
const forumInitialState: Forum = {
    posts: [],
    user_posts: []
}

const forumSlice: Slice<Forum, SliceCaseReducers<Forum>, string> = createSlice({
    name: 'forum',
    initialState: forumInitialState,
    reducers: {
        retrieve_all_posts: (state: Forum, action: PayloadAction<[Post]>): Forum => {
            return {
                ...state,
                posts: action.payload,
            }
        },
        retrieve_post_by_id: (state: Forum, action: PayloadAction<Forum>): Forum => {
            return state;
        },
        create_post: (state: Forum, action: PayloadAction<Post>): Forum => {
            state.user_posts.push(action.payload);
            return state;
        },
        create_comment: (state: Forum, action: PayloadAction<Comment>): Forum => {
            return state;
        }
    }
});

/*const requestsSlice: Slice<Forum, SliceCaseReducers<Forum>, string> = createSlice({
    name: 'forum',
    initialState: {
        posts: []
    },
    reducers: {
        retrieve_all_posts: (state: Forum, action: PayloadAction<Forum>): Forum => {
            return {
                posts: action.payload.posts
            }
        },
        retrieve_post_by_id: (state: Forum, action: PayloadAction<Forum>): Forum => {
            return {
                ...state,
                posts: action.payload.posts
            }
        },
        create_post: (state: Forum, action: PayloadAction<Forum>): Forum => {
            return {
                ...state,
                posts: action.payload.posts
            }
        },
        create_comment: (state: Forum, action: PayloadAction<Forum>): Forum => {
            return {
                ...state,
                posts: action.payload.posts
            }
        }
    }
});*/

export const { 
    retrieve_all_posts, 
    retrieve_post_by_id, 
    create_post, 
    create_comment 
}: CaseReducerActions<SliceCaseReducers<Forum>> = forumSlice.actions;


export const forum_slice: Reducer<Forum, AnyAction> = forumSlice.reducer;
