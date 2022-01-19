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
import { Comment, Forum, Post, UserRequests } from '../types';


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

const requestsInitialState: UserRequests = {
    requests: []
}

const requestsSlice: Slice<UserRequests, SliceCaseReducers<UserRequests>, string> = createSlice({
    name: 'forum',
    initialState: requestsInitialState,
    reducers: {
        retrieve_all_support_requests: (state: UserRequests, action: PayloadAction<UserRequests>): UserRequests => {
            return {
                requests: action.payload.requests
            }
        },
        retrieve_support_request_by_id: (state: UserRequests, action: PayloadAction<UserRequests>): UserRequests => {
            return {
                ...state,
                requests: action.payload.requests
            }
        },
        create_support_request: (state: UserRequests, action: PayloadAction<UserRequests>): UserRequests => {
            return {
                ...state,
                requests: action.payload.requests
            }
        }
    }
});

export const { 
    retrieve_all_posts, 
    retrieve_post_by_id, 
    create_post, 
    create_comment 
}: CaseReducerActions<SliceCaseReducers<Forum>> = forumSlice.actions;

export const { 
    retrieve_all_support_requests, 
    retrieve_support_request_by_id, 
    create_support_request
}: CaseReducerActions<SliceCaseReducers<UserRequests>> = requestsSlice.actions;


export const forum_reducer: Reducer<Forum, AnyAction> = forumSlice.reducer;
export const request_reducer: Reducer<UserRequests, AnyAction> = requestsSlice.reducer;
