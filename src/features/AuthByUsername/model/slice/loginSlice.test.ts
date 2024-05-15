import { loginReducer, loginActions } from './loginSlice';
import { ILoginSchema } from '../types/loginSchema';

describe('loginSlice', () => {
  test('set username', () => {
    const username = 'username';
    const state: Partial<ILoginSchema> = { username: '' };

    const expected = loginReducer(
      state as ILoginSchema,
      loginActions.setUsername(username),
    );

    const result = { username };

    expect(expected).toEqual(result);
  });

  test('set password', () => {
    const password = 'password';
    const state: Partial<ILoginSchema> = { password: '' };

    const expected = loginReducer(
      state as ILoginSchema,
      loginActions.setPassword(password),
    );

    const result = { password };

    expect(expected).toEqual(result);
  });
});
