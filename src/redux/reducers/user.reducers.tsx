import { Action } from 'redux';
import { userActionsTypes } from '../actions/user.actions';
import { User } from '../types/user.types';

const initialState: User = {
    id: '',
    email: '',
    is_verified: false
};

export function userReducer(state = initialState, action: Action) {
    switch (action.type) {
        case userActionsTypes.signIn: {

        }
        case userActionsTypes.signUp: {

        }
        case userActionsTypes.whoIAm: {
            return {
                ...state,
                id: action.payload,
                email: action.payload,
                is_verified: action.payload
            }
        }
    }
}