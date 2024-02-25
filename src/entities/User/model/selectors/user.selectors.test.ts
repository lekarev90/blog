import { IStateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData, IUser } from 'entities/User';

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
});
