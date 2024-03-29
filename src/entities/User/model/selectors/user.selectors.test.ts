import { IStateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData, IUser } from 'entities/User';
import { getIsUserInit } from 'entities/User/model/selectors/user.selectors';
import { DeepPartial } from 'shared/const/types';

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
