import { createSelector } from 'reselect';
import { getUserAuthData } from 'entities/User';
import { getArticleDetails } from 'entities/Article';

export const getIsCanEditArticle = createSelector(
  getUserAuthData,
  getArticleDetails,
  (user, article) => article && article.data?.user.id === user?.authData?.id,
);
