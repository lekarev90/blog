import axios from 'axios';
import { userActions } from 'entities/User';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import i18n from 'shared/config/i18n/i18nTest.config';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('loginByUsername', () => {
  test('success login', async () => {
    const userData = { username: '123', id: '2' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'username', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(userData);
  });

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'username', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe(i18n.t('translation:login.error'));
  });
});
