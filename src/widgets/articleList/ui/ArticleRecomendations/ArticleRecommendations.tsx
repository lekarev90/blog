import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { EArticlesView } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/depricated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import { useGetArticleRecommendationsQuery } from '../../api/getArticleRecommendations';
import { ArticlesList } from '../ArticlesList/ArticlesList';

export const ArticleRecommendations = memo(() => {
  const { t } = useTranslation('articles');

  const { isLoading, data: articles } = useGetArticleRecommendationsQuery(5);

  return (
    <VStack Component="section" gap="16">
      <ToggleFeatures
        feature="isOldDesign"
        on={<TextDeprecated title={t('articles:recommendationTitle')} />}
        off={<Text title={t('articles:recommendationTitle')} />}
      />
      <ArticlesList
        articles={articles}
        isLoading={isLoading}
        withMoreButton={false}
        articlesView={EArticlesView.GRID}
        cardVariant="default"
      />
    </VStack>
  );
});
