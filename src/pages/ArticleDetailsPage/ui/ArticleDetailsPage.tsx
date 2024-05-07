import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { ArticleRoot } from 'entities/Article';
import { Page } from 'shared/ui/Page/Page';

const ArticleDetailsPage = memo(() => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{id: string, know: string}>();

  if (!id) {
    return (
      <Page>
        {t('article-details:articleDoesntFound')}
      </Page>
    );
  }

  return (
    <Page>
      <ArticleRoot id={id} />
    </Page>
  );
});

export default ArticleDetailsPage;
