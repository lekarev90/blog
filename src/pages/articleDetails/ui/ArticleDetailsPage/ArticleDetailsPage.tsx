import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { ArticleComments, ArticleRoot } from '@/widgets/article';
import { Page } from '@/shared/ui/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRating } from '@/features/articleRaiting';
import { ArticleRecommendations } from '@/widgets/articleList';
import { toggleFeatures } from '@/shared/lib/features';

import { ArticleDetailsHeader } from '../ArticleDetailsHeader/ArticleDetailsHeader';
import { Card } from '@/shared/ui/Card';

const ArticleDetailsPage = memo(() => {
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <Page>
        {t('articles')}
      </Page>
    );
  }

  const rating = toggleFeatures({
    name: 'isArticleRatingEnabled',
    on: () => <ArticleRating articleId={id} />,
    off: () => (
      <Card>
        {t('articles:features.rating.comingSoon')}
      </Card>
    ),
  });

  return (
    <VStack Component={Page} gap="32" flexWrap={false}>
      <ArticleDetailsHeader id={id} />
      <ArticleRoot id={id} />
      {rating}
      <ArticleRecommendations />
      <ArticleComments id={id} />
    </VStack>
  );
});

export default ArticleDetailsPage;
