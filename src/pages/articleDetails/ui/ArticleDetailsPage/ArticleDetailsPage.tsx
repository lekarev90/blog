import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { ArticleRating } from '@/features/articleRaiting';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/depricated/Card';
import { Page } from '@/shared/ui/depricated/Page';
import { VStack } from '@/shared/ui/depricated/Stack';
import { ArticleComments, ArticleRoot } from '@/widgets/article';
import { ArticleRecommendations } from '@/widgets/articleList';

import { ArticleDetailsHeader } from '../ArticleDetailsHeader/ArticleDetailsHeader';

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

  return (
    <VStack Component={Page} gap="32" flexWrap={false}>
      <ArticleDetailsHeader id={id} />
      <ArticleRoot id={id} />
      <ToggleFeatures
        feature="isArticleRatingEnabled"
        on={<ArticleRating articleId={id} />}
        off={(
          <Card>
            {t('articles:features.rating.comingSoon')}
          </Card>
          )}
      />
      <ArticleRecommendations />
      <ArticleComments id={id} />
    </VStack>
  );
});

export default ArticleDetailsPage;
