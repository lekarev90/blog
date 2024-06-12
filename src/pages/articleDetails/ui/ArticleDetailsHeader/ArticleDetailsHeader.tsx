import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { getIsCanEditArticle } from '@/entities/Article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink';
import { Button, ButtonVariants } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';

export const ArticleDetailsHeader = memo(({ id }: { id: string }) => {
  const { t } = useTranslation();

  const isCanEditArticle = useSelector(getIsCanEditArticle);

  return (
    <HStack justify="between">
      <AppLink to={getRouteArticles()}>
        <Button variant={ButtonVariants.OUTLINE}>
          {t('articles:goBack')}
        </Button>
      </AppLink>
      {isCanEditArticle && (
        <AppLink to={getRouteArticleEdit(id)}>
          <Button variant={ButtonVariants.OUTLINE}>
            {t('articles:editButton')}
          </Button>
        </AppLink>
      )}
    </HStack>
  );
});
