import { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import {
  ArticleDetails,
  ArticleDetailsLoading,
  articleDetailsReducer,
  fetchArticleById,
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
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
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);
  const isContentReady = !isLoading && !error && article;

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      {isLoading && <ArticleDetailsLoading />}
      {error && <Text className={styles.error} text="ERROR" variant={TextVariant.ERROR} />}
      {isContentReady && (
        <ArticleDetails {...article} />
      )}
    </DynamicModuleLoader>
  );
});
