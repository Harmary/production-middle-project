import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { UserSchema } from '../types/User';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
