import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { ArticleComments, ArticleRoot } from 'widgets/article';
import { Page } from 'shared/ui/Page/Page';
import { ArticleRecommendations } from 'features/article';

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
    <Page className={styles.container}>
      <ArticleDetailsHeader id={id} />
      <ArticleRoot id={id} />
      <div className={styles.recommendations}>
        <ArticleRecommendations />
      </div>
      <div className={styles.commentsWrapper}>
        <ArticleComments id={id} />
      </div>
    </Page>
  );
});

export default ArticleDetailsPage;
