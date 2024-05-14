import { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import {
  ArticleDetails, ArticleDetailsLoading, articleDetailsReducer, fetchArticleById, getArticleDetails,
} from 'entities/Article';

import styles from './ArticleRoot.module.scss';

interface ArticleDetailsProps {
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleRoot: FC<ArticleDetailsProps> = memo(({ id }) => {
  const dispatch = useAppDispatch();
  const { isLoading, error, data } = useSelector(getArticleDetails) || {};

  const isContentReady = !isLoading && !error && data;

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      {isLoading && <ArticleDetailsLoading />}
      {error && <Text className={styles.error} text="ERROR" variant={TextVariant.ERROR} />}
      {isContentReady && (
        <ArticleDetails {...data} />
      )}
    </DynamicModuleLoader>
  );
});
