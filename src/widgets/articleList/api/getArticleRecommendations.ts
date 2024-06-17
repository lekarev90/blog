import { ARTICLES_REQUEST_URL, IArticle } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';

export const articleRecommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendations: build.query<IArticle[], number>({
      query: (limit) => ({
        url: ARTICLES_REQUEST_URL,
        params: { _limit: limit, _expand: 'user' },
      }),
    }),
  }),
});

export const { useGetArticleRecommendationsQuery } = articleRecommendationsApi;
