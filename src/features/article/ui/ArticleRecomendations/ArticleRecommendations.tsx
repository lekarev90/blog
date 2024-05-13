import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { ArticlesList } from 'widgets/articleList';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import { Text } from 'shared/ui/Text/Text';

import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations';
import { articleRecommendationsIsLoading } from '../../model/selectors/articleRecommendations.selectors';
import { articleRecommendationsReducer, getArticleRecommendations } from '../../model/slices/articleRecommendationsSlice';

import styles from './ArticleRecommendations.module.scss';

const reducers = {
  articleRecommendations: articleRecommendationsReducer,
};

export const ArticleRecommendations = memo(() => {
  const { t } = useTranslation('articles');

  const dispatch = useAppDispatch();
  const isLoading = useSelector(articleRecommendationsIsLoading);
  const articles = useSelector(getArticleRecommendations.selectAll);

  useEffect(() => {
    dispatch(fetchArticleRecommendations());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <div className={styles.container}>
        <Text title={t('articles:recommendationTitle')} />
        <ArticlesList className={styles.articles} articles={articles} isLoading={isLoading} withMoreButton={false} />
      </div>
    </DynamicModuleLoader>
  );
});
