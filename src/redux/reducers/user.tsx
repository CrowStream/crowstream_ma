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
        is_email_verified: '' != ''
    },
    reducers: {
        who_i_am: (state: User, action: PayloadAction<User>): User => {
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                is_email_verified: action.payload.is_email_verified
            }
        }
    }
});

export const { who_i_am }: CaseReducerActions<SliceCaseReducers<User>> = userSlice.actions;
export default userSlice.reducer;