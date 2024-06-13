import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { EArticlesView } from '@/entities/Article';
import { VStack } from '@/shared/ui/depricated/Stack';
import { Text } from '@/shared/ui/depricated/Text';

import { useGetArticleRecommendationsQuery } from '../../api/getArticleRecommendations';
import { ArticlesList } from '../ArticleList/ArticlesList';

export const ArticleRecommendations = memo(() => {
  const { t } = useTranslation('articles');

  const { isLoading, data: articles } = useGetArticleRecommendationsQuery(5);

  return (
    <VStack Component="section" gap="16">
      <Text title={t('articles:recommendationTitle')} />
      <ArticlesList articles={articles} isLoading={isLoading} withMoreButton={false} articlesView={EArticlesView.GRID} />
    </VStack>
  );
});
