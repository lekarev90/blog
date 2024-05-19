import { IStateSchema } from 'app/providers/StoreProvider';
import { createSelector } from 'reselect';

import { ERoles } from '../types/userSchema';

export const getUserAuthData = (state: IStateSchema) => state.user;

export const isUserAdmin = createSelector(getUserAuthData, ({ authData }) => Boolean(authData?.roles?.includes(ERoles.ADMIN)));
export const isUserManager = createSelector(getUserAuthData, ({ authData }) => Boolean(authData?.roles?.includes(ERoles.MANAGER)));
