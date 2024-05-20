import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';

import { getIsCanEditArticle } from 'entities/Article';

export const ArticleDetailsHeader = memo(({ id }: {id: string}) => {
  const { t } = useTranslation();

  const isCanEditArticle = useSelector(getIsCanEditArticle);

  return (
    <HStack justify="between">
      <AppLink to={RouterPath.articles}>
        <Button variant={ButtonVariants.OUTLINE}>
          {t('articles:goBack')}
        </Button>
      </AppLink>
      {isCanEditArticle && (
        <AppLink to={`${RouterPath.articles}/${id}/edit`}>
          <Button variant={ButtonVariants.OUTLINE}>
            {t('articles:editButton')}
          </Button>
        </AppLink>
      )}
    </HStack>
  );
});
