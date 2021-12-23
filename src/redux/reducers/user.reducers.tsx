import { Action } from 'redux';
import { userActionsTypes } from '../actions/user.actions';
import { User } from '../types/user.types';

const initialState: User = {
    id: '',
    email: '',
    is_verified: false
};
  
  interface actionType1 {
    type: typeof userActionsTypes.whoIAm, 
    payload: {
        id_user: string,
        email: string,
        is_verified: boolean
    } 
  }
  
  interface actionType2 {
    type: typeof userActionsTypes.signIn,
    payload: {
        id_user: string,
        email: string,
        is_verified: boolean
    } 
  }
  
  type actionType = actionType1 | actionType2;

export function userReducer(state = initialState, action: actionType): User{
    switch (action.type) {
        case userActionsTypes.signIn: {
            return {
                ...state,
                id: action.payload.id_user,
                email: action.payload.email,
                is_verified: action.payload.is_verified
            }
        }
        case userActionsTypes.signUp: {
            return state;
        }
        case userActionsTypes.whoIAm: {
            return {
                ...state,
                id: action.payload.id_user,
                email: action.payload.email,
                is_verified: action.payload.is_verified
            }
        }
    }
}