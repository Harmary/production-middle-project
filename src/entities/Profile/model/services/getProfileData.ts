import { createAsyncThunk } from '@reduxjs/toolkit';
import { t } from 'i18next';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../types/types';

export const getProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/getProfileData', async (_, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get('/profile', {
            headers: {
                Authorization: 'jklmkp',
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (error) {
        console.log(error);
        return rejectWithValue(t('Wrong username or password'));
    }
});
