import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const selectProfileData = (state: StateSchema) => state?.profile?.data;
