import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { ArticleComments, ArticleRoot } from '@/widgets/article';
import { Page } from '@/shared/ui/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRating } from '@/features/articleRaiting';
import { ArticleRecommendations } from '@/widgets/articleList';

import { ArticleDetailsHeader } from '../ArticleDetailsHeader/ArticleDetailsHeader';
import { getFeatureFlag } from '@/shared/lib/features';

const ArticleDetailsPage = memo(() => {
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>();

  const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');

  if (!id) {
    return (
      <Page>
        {t('articles')}
      </Page>
    );
  }

  return (
    <VStack Component={Page} gap="32" flexWrap={false}>
      <ArticleDetailsHeader id={id} />
      <ArticleRoot id={id} />
      {isArticleRatingEnabled && <ArticleRating articleId={id} />}
      <ArticleRecommendations />
      <ArticleComments id={id} />
    </VStack>
  );
});

export default ArticleDetailsPage;
