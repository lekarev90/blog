import i18n from '@/shared/config/i18n/i18nTest.config';

import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { loginByUsername } from './loginByUsername';

jest.mock('axios');

describe('loginByUsername', () => {
  test('success login', async () => {
    const userData = { username: '123', id: '2' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockResolvedValue({ data: userData });
    const result = await thunk.callThunk({ username: 'username', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(userData);
  });

  test('error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockResolvedValue({ status: 403 });
    const result = await thunk.callThunk({ username: 'username', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe(i18n.t('translation:serverError'));
  });
});
