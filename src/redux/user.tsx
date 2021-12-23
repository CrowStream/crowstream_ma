import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: '',
        email: '',
        is_verified: false
    },
    reducers: {
        who_i_am: (state, action) => {
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                es_verified: action.payload.is_verified
            }
        }
    }
});

export const { who_i_am } = userSlice.actions
export default userSlice.reducer