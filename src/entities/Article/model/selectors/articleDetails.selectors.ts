import { IStateSchema } from 'app/providers/StoreProvider';
import { createSelector } from 'reselect';
import { getUserAuthData } from 'entities/User';

export const getArticleDetails = (state: IStateSchema) => state.articleDetails;

export const getIsCanEditArticle = createSelector(
  getUserAuthData,
  getArticleDetails,
  (user, article) => article && article.data?.user.id === user?.authData?.id,
);
