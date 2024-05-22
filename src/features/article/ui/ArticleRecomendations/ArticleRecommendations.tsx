import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticlesList } from '@/widgets/articleList';
import { Text } from '@/shared/ui/Text/Text';
import { VStack } from '@/shared/ui/Stack';

import { useGetArticleRecommendationsQuery } from '../../model/api/getArticleRecommendations';

export const ArticleRecommendations = memo(() => {
  const { t } = useTranslation('articles');

  const { isLoading, data: articles } = useGetArticleRecommendationsQuery(5);

  return (
    <VStack Component="section" gap="16">
      <Text title={t('articles:recommendationTitle')} />
      <ArticlesList articles={articles} isLoading={isLoading} withMoreButton={false} />
    </VStack>
  );
});
