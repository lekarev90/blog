import { IStateSchema } from 'app/providers/StoreProvider';

export const getUserAuthData = (state: IStateSchema) => state.user.authData;
export const getIsUserInit = (state: IStateSchema) => state.user.initialized;
