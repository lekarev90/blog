import { DeepPartial } from '@/shared/const/types';

import { ERoles } from '../const/const';
import { IUser, IUserSchema } from '../types/userSchema';

import { userActions, userReducer } from './userSlice';

describe('userReducer', () => {
  beforeAll(() => {
    jest.spyOn(localStorage, 'getItem');
    jest.spyOn(localStorage, 'removeItem');

    localStorage.getItem = jest.fn();
    localStorage.removeItem = jest.fn();
  });
  test('setAuthData', () => {
    const authData: IUser = { id: '123', username: 'username', roles: [ERoles.ADMIN] };

    const initialState: DeepPartial<IUserSchema> = {};

    const expectedState: DeepPartial<IUserSchema> = { authData };

    const result = userReducer(initialState as IUserSchema, userActions.setAuthData(authData));

    expect(result).toEqual(expectedState);
  });

  test('logout', () => {
    const authData: IUser = { id: '123', username: 'username', roles: [ERoles.ADMIN] };

    const initialState: DeepPartial<IUserSchema> = { authData };

    const expectedState: DeepPartial<IUserSchema> = {
      authData: undefined,
    };

    const result = userReducer(initialState as IUserSchema, userActions.logout());

    expect(result).toEqual(expectedState);
  });
});
