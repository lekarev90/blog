import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  ArticleDetails, ArticleDetailsLoading, articleDetailsReducer, fetchArticleById, getArticleDetails,
} from '@/entities/Article';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { Text as TextDeprecated, TextVariant } from '@/shared/ui/depricated/Text';
import { Text } from '@/shared/ui/redesigned/Text';

import styles from './ArticleRoot.module.scss';

interface ArticleDetailsProps {
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleRoot = memo(({ id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();
  const { isLoading, error, data } = useSelector(getArticleDetails) || {};

  const isContentReady = !isLoading && !error && data;

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      {isLoading && <ArticleDetailsLoading />}
      {error && (
        <ToggleFeatures
          feature="isOldDesign"
          on={<TextDeprecated className={styles.error} text="ERROR" variant={TextVariant.ERROR} />}
          off={<Text className={styles.error} text="ERROR" variant="error" />}
        />
      )}
      {isContentReady && <ArticleDetails {...data} />}
    </DynamicModuleLoader>
  );
});
