/**
 * User Reducers
 */

// Redux Toolkit
import {
    ActionReducerMapBuilder,
    CaseReducerActions,
    createSlice,
    PayloadAction,
    Slice,
    SliceCaseReducers
} from '@reduxjs/toolkit';

// Crowstream
import { User } from '../types';



const userSlice: Slice<User, SliceCaseReducers<User>, string> = createSlice({
    name: 'user',
    initialState: {
        id: '',
        email: '',
        is_email_verified: '' != '',
        token: ''
    },
    reducers: {
        who_i_am: (state: User, action: PayloadAction<User>): User => {
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                is_email_verified: action.payload.is_email_verified
            }
        },
        sign_in: (state: User, action: PayloadAction<User>): User => {
            return {
                ...state,
                token: action.payload.token
            }
        }     
    }
});

export const { who_i_am, sign_in }: CaseReducerActions<SliceCaseReducers<User>> = userSlice.actions;
export default userSlice.reducer;