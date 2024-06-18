import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { ArticleRating } from '@/features/articleRaiting';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ToggleFeatures } from '@/shared/lib/features';
import { Page } from '@/shared/ui/depricated/Page';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleAdditional, ArticleComments, ArticleRoot } from '@/widgets/article';
import { ArticleRecommendations } from '@/widgets/articleList';

import { ArticleDetailsHeader } from '../ArticleDetailsHeader/ArticleDetailsHeader';

import styles from './ArticleDetailsPage.module.scss';

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
    <ToggleFeatures
      feature="isOldDesign"
      on={(
        <VStack Component={Page} gap="32" flexWrap={false}>
          <ArticleDetailsHeader id={id} />
          <ArticleRoot id={id} />
          <ArticleRating articleId={id} />
          <ArticleRecommendations />
          <ArticleComments id={id} />
        </VStack>
      )}
      off={(
        <StickyContentLayout
          content={(
            <VStack Component={Card} variant="light" gap="32" padding="24">
              <ArticleRoot id={id} />
              <ArticleRating articleId={id} />
              <ArticleRecommendations />
              <ArticleComments id={id} />
            </VStack>
          )}
          right={(
            <HStack gap="24" Component={Card} padding="24" borderRadius="rounded" className={styles.additionalWrapper}>
              <ArticleAdditional />
            </HStack>
)}
        />
      )}
    />
  );
});

export default ArticleDetailsPage;
