import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/types';

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
};

export const ProfileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {
    },
});

export const { actions: profileActions } = ProfileSlice;
export const { reducer: profileReducer } = ProfileSlice;
