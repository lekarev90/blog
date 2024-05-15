import { IStateSchema } from 'app/providers/StoreProvider';

import { ILoginSchema } from '../../types/loginSchema';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
  test('getLoginState', () => {
    const loginForm: ILoginSchema = {
      username: 'username',
      password: 'pass',
      error: 'error',
      isLoading: true,
    };

    const state: Partial<IStateSchema> = {
      loginForm,
    };

    const expected = getLoginState(state as IStateSchema);

    expect(expected).toEqual(loginForm);
  });
});
