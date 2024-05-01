import { DeepPartial } from 'shared/const/types';
import { userActions, userReducer } from './userSlice';

import { ERoles, IUser, IUserSchema } from '../types/userSchema';

describe('userReducer', () => {
  beforeAll(() => {
    jest.spyOn(localStorage, 'getItem');
    jest.spyOn(localStorage, 'removeItem');

    localStorage.getItem = jest.fn();
    localStorage.removeItem = jest.fn();
  });
  test('setAuthData', () => {
    const authData: IUser = { id: '123', username: 'username', role: ERoles.SUPERADMIN };

    const initialState: DeepPartial<IUserSchema> = {};

    const expectedState: DeepPartial<IUserSchema> = { authData };

    const result = userReducer(initialState as IUserSchema, userActions.setAuthData(authData));

    expect(result).toEqual(expectedState);
  });

  test('initAuthData', () => {
    const initialState: DeepPartial<IUserSchema> = {};

    const expectedState: DeepPartial<IUserSchema> = { initialized: true };

    const result = userReducer(initialState as IUserSchema, userActions.initAuthData());

    expect(result).toEqual(expectedState);
  });

  test('logout', () => {
    const authData: IUser = { id: '123', username: 'username', role: ERoles.SUPERADMIN };

    const initialState: DeepPartial<IUserSchema> = { authData };

    const expectedState: DeepPartial<IUserSchema> = {
      authData: undefined,
    };

    const result = userReducer(initialState as IUserSchema, userActions.logout());

    expect(result).toEqual(expectedState);
  });
});