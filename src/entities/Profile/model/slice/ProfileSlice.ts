import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/types';
import { getProfileData } from '../services/getProfileData';

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
        editProfile: (state) => {
            state.readonly = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProfileData.pending, (state) => {
            state.error = '';
            state.isLoading = true;
        });
        builder.addCase(getProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(getProfileData.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = true;
        });
    },
});

export const { actions: profileActions } = ProfileSlice;
export const { reducer: profileReducer } = ProfileSlice;
