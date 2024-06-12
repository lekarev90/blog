import { IStateSchema } from '@/app/providers/StoreProvider';

import { IUser } from '../types/userSchema';

import { getUserAuthData } from './user.selectors';

describe('user.selectors', () => {
  test('getUserAuthData', () => {
    const authData: IUser = {
      id: '1',
      username: 'username',
    };

    const state: Partial<IStateSchema> = {
      user: {
        authData,
      },
    };

    const expected = getUserAuthData(state as IStateSchema);

    expect(expected).toEqual({ authData });
  });
});
