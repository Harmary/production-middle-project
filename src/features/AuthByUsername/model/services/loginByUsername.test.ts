import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUserName';
import { userActions } from '../../../../entities/User';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('loginByUsername', () => {
    test('should success login user', async () => {
        const userValues = { username: '123', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValues }));

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValues }));
        const result = await thunk.callFunc({ username: '123', password: '123' });

        expect(mockedAxios.post).toBeCalled();
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUser(userValues));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValues);
    });

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callFunc({ username: '123', password: '123' });

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
