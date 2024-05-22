import { createSelector } from 'reselect';
import { IStateSchema } from '@/app/providers/StoreProvider';

import { ERoles } from '../const/const';

export const getUserAuthData = (state: IStateSchema) => state.user;

export const isUserAdmin = createSelector(getUserAuthData, ({ authData }) => Boolean(authData?.roles?.includes(ERoles.ADMIN)));
export const isUserManager = createSelector(getUserAuthData, ({ authData }) => Boolean(authData?.roles?.includes(ERoles.MANAGER)));
