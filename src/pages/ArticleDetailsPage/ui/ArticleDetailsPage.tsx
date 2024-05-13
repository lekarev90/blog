import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';

import { ArticleComments, ArticleRoot } from 'widgets/article';
import { Page } from 'shared/ui/Page/Page';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';

import styles from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage = memo(() => {
  const navigate = useNavigate();
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string; know: string }>();

  const onBackToList = useCallback(() => {
    navigate(RouterPath.articles);
  }, [navigate]);

  if (!id) {
    return (
      <Page>
        {t('articles')}
      </Page>
    );
  }

  return (
    <Page className={styles.container}>
      <Button variant={ButtonVariants.OUTLINE} onClick={onBackToList} className={styles.goBackButton}>
        {t('articles:goBack')}
      </Button>
      <ArticleRoot id={id} />
      <div className={styles.commentsWrapper}>
        <ArticleComments id={id} />
      </div>
    </Page>
  );
});

export default ArticleDetailsPage;
