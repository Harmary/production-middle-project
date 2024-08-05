import { createAsyncThunk } from '@reduxjs/toolkit';
import { t } from 'i18next';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from '../../../../entities/User';

export interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>(
    'login/loginByUsername',
    async (creds, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.post('/login', creds);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(response.data),
            );
            // extra.navigate('/about');
            dispatch(userActions.setUser(response.data));
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(t('Wrong username or password'));
        }
    },
);
