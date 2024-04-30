import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { ArticleRoot } from 'entities/Article';

const ArticleDetailsPage = memo(() => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{id: string, know: string}>();

  if (!id) {
    return t('article-details:articleDoesntFound');
  }

  return <ArticleRoot id={id} />;
});

export default ArticleDetailsPage;
