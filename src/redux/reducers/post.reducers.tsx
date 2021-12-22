import { AnyAction } from 'redux';
import { useActionsTypes } from '../actions/post.actions';
import { Post } from '../types/post.types';

const initialState: Post[] = [{
    id: '',
    user_id: '',
    description: '',
    comments: [],
    files: []
}];


export function postReducer (state = initialState, action: useActionsTypes): Post[] {
    switch (action.type) {
        case "retrieve_all_post": {
            return [...action.payload];
        }
        case "retrieve_post_by_id": {
            return [...action.payload];
        }
        case "create_post": {
            return [...state, action.payload]
        }
        case "create_comment": {
            return [...state, action.payload]
        }
        case "update_post": {
            let newstate = state.filter(Post => Post.id !== action.payload.id);
            return [...newstate, action.payload]
        }
        case "delete_post": {
            return state.filter(Post => Post.id !== action.payload);
        }
        default: {
            return state
        }
    }

}