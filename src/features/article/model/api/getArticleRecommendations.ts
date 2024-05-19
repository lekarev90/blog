import { rtkApi } from 'shared/api/rtkApi';
import { ARTICLES_REQUEST_URL } from 'entities/Article';

export const articleRecommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendations: build.query({
      query: (limit) => ({
        url: ARTICLES_REQUEST_URL,
        params: { _limit: limit },
      }),
    }),
  }),
});

export const { useGetArticleRecommendationsQuery } = articleRecommendationsApi;
