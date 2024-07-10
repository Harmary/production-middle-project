import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
    test('should return state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error', isLoading: false, password: '123', username: '123',
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual(state.loginForm);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual({
            error: '', isLoading: false, password: '', username: '',
        });
    });
});
