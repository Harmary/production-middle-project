import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
}

const initialState: UserState = {
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
