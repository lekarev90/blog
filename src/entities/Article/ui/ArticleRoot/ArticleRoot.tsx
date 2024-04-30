import React, { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';

import { ArticleDetails } from '../ArticleDetails/ArticleDetails';
import { fetchCommentsByArticleId } from '../../model/services/fetchArticleCommets';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/articleComments.selectors';
import { ArticleDetailsLoading } from '../ArticleDetailsLoading/ArticleDetailsLoading';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails.selectors';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

import styles from './ArticleRoot.module.scss';

interface ArticleDetailsProps {
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
};

export const ArticleRoot: FC<ArticleDetailsProps> = memo(({ id }) => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);
  const comments = useSelector(getArticleComments.selectAll);
  const isCommentsLoading = useSelector(getArticleCommentsIsLoading);

  const { t } = useTranslation('comments');

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      {isLoading && <ArticleDetailsLoading />}
      {error && (
        <Text
          className={styles.error}
          text="ERROR"
          variant={TextVariant.ERROR}
        />
      ) }
      {!isLoading && !error && article
        && (
          <>
            <ArticleDetails {...article} />
            <Text title={t('article-details:commentTitle')} />
            <CommentList
              isLoading={isCommentsLoading}
              comments={comments}
            />
          </>
        )}
    </DynamicModuleLoader>
  );
});
