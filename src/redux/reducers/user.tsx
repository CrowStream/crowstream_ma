/**
 * User Reducers
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
import { User, Profile, Profiles } from '../types';


const userInitialState: User = {
    id: '',
    email: '',
    is_email_verified: false,
    token: '',
}

const currentProfileInitialState: Profile = {
    id: '',
    name: '',
}

const profilesInitialState: Profiles = {
    profiles: [],
}

const userSlice: Slice<User, SliceCaseReducers<User>, string> = createSlice({
    name: 'User',
    initialState: userInitialState,
    reducers: {
        sign_in: (state: User, action: PayloadAction<any>): User => {
            const { token } = action.payload.data.signin.token;
            return {
                ...state,
                token: token,
            };
        },
        sign_up: (state: User, _): User => {
            return state;
        },
        who_am_i: (state: User, action: PayloadAction<User>): User => {
            const { id, email, is_email_verified } = action.payload;
            return {
                ...state,
                id,
                email,
                is_email_verified,
            };
        },
    },
});

const currentProfileSlice: Slice<Profile, SliceCaseReducers<Profile>, string> = createSlice({
    name: 'Profile',
    initialState: currentProfileInitialState,
    reducers: {
        create_profile: (state: Profile, _): Profile => {
            return state;
        },
        get_profile_by_id: (state: Profile, action: PayloadAction<Profile>): Profile => {
            const { id, name } = action.payload;
            return {
                ...state,
                id,
                name,
            };
        },
    },
});

const profilesSlice: Slice<Profiles, SliceCaseReducers<Profiles>, string> = createSlice({
    name: 'Profiles',
    initialState: profilesInitialState,
    reducers: {
        get_all_profiles: (state: Profiles, action: PayloadAction<Profiles>): Profiles => {
            return {
                ...state,
                profiles: action.payload.profiles,
            };
        },
    },
});

export const {
    sign_in,
    sign_up,
    who_am_i,
}: CaseReducerActions<SliceCaseReducers<User>> = userSlice.actions;

export const {
    create_profile,
    get_profile_by_id,
}: CaseReducerActions<SliceCaseReducers<User>> = currentProfileSlice.actions;

export const {
    get_all_profiles,
}: CaseReducerActions<SliceCaseReducers<User>> = profilesSlice.actions;

export const userReducer: Reducer<User, AnyAction> = userSlice.reducer;
export const currentProfileReducer: Reducer<Profile, AnyAction> = currentProfileSlice.reducer;
export const profilesReducer: Reducer<Profiles, AnyAction> = profilesSlice.reducer;