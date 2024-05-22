import { IStateSchema } from '@/app/providers/StoreProvider';

import { getArticleDetails } from './articleDetails.selectors';

describe('articleDetails selectors', () => {
  const articleDetails = {
    data: {},
    isLoading: false,
    error: 'some error',
  };

  test('getArticleDetails', async () => {
    const state = { articleDetails };

    const expected = getArticleDetails(state as IStateSchema);

    expect(expected).toEqual(articleDetails);
  });
});
