import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { t } from 'i18next';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { User, userActions } from '../../../../entities/User';

export interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (creds, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', creds);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setUser(response.data));
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(t('Wrong username or password'));
        }
    },
);
