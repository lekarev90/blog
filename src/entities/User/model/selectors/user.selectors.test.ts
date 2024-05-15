import { IStateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/const/types';

import { IUser } from '../types/userSchema';
import { getIsUserInit, getUserAuthData } from './user.selectors';

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

    expect(expected).toEqual(authData);
  });

  test('getIsUserInit', () => {
    const state: DeepPartial<IStateSchema> = {
      user: {
        initialized: true,
      },
    };

    const expected = getIsUserInit(state as IStateSchema);

    expect(expected).toBeTruthy();
  });
});
