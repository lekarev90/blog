import { rtkApi } from '@/shared/api/rtkApi';
import { ARTICLE_RATINGS_REQUEST_URL } from '../const/const';
import { IRating } from '@/entities/Rating';

export const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<IRating[], {userId: string, articleId: string}>({
      query: ({ articleId, userId }) => ({
        url: ARTICLE_RATINGS_REQUEST_URL,
        params: {
          userId,
          articleId,
        },
      }),
    }),
  }),
});

export const { useGetArticleRatingQuery } = articleRatingApi;
