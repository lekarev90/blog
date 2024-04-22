import { DeepPartial } from 'shared/const/types';
import { IStateSchema } from 'app/providers/StoreProvider';

import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails.selectors';

describe('articleDetails selectors', () => {
  test('getArticleDetailsData', async () => {
    const data = { };

    const state: DeepPartial<IStateSchema> = {
      articleDetails: {
        data,
      },
    };

    const expected = getArticleDetailsData(state as IStateSchema);

    expect(expected).toEqual(data);
  });

  test('getArticleDetailsIsLoading', async () => {
    const state: DeepPartial<IStateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };

    const expected = getArticleDetailsIsLoading(state as IStateSchema);

    expect(expected).toBeTruthy();
  });

  test('getArticleDetailsError', async () => {
    const error = 'error';

    const state: DeepPartial<IStateSchema> = {
      articleDetails: {
        error,
      },
    };

    const expected = getArticleDetailsError(state as IStateSchema);

    expect(expected).toBe(error);
  });
});
