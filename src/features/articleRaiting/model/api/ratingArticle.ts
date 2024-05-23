import { rtkApi } from '@/shared/api/rtkApi';
import { ARTICLE_RATINGS_REQUEST_URL } from '../const/const';
import { IRating } from '@/entities/Rating';

interface IGetArticleRatingArg {
  userId: string
  articleId: string
}

interface IRateArticleRatingArg {
  userId: string
  articleId: string
  rate: number
  feedback?: string
}

export const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<IRating[], IGetArticleRatingArg>({
      query: ({ articleId, userId }) => ({
        url: ARTICLE_RATINGS_REQUEST_URL,
        params: {
          userId,
          articleId,
        },
      }),
    }),
    rateArticle: build.mutation<void, IRateArticleRatingArg>({
      query: (data) => ({
        url: ARTICLE_RATINGS_REQUEST_URL,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetArticleRatingQuery, useRateArticleMutation } = articleRatingApi;
