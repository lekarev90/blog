import i18n from 'i18next';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchArticleById } from './fetchArticleById';

describe('loginByUsername', () => {
  test('success response with data', async () => {
    const data = { someData: 'text', id: '2' };

    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockResolvedValue({ data });
    const result = await thunk.callThunk('2');

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(data);
  });

  test('error', async () => {
    const data = undefined;
    const expectedError = i18n.t('translation:serverError');

    const thunk = new TestAsyncThunk(fetchArticleById);

    thunk.api.get.mockResolvedValue({ data });
    const result = await thunk.callThunk('2');

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe(expectedError);
  });
});
