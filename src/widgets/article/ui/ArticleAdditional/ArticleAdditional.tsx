import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { getArticleDetails, getIsCanEditArticle } from '@/entities/Article';
import Eye from '@/shared/assets/icons/eye.svg';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

export const ArticleAdditional = memo(() => {
  const { t } = useTranslation();
  const { data } = useSelector(getArticleDetails) || {};

  const isCanEditArticle = useSelector(getIsCanEditArticle);

  if (!data) {
    return null;
  }

  return (
    <>
      <AppLink to={getRouteArticles()}>
        <Button variant="outline">
          {t('articles:goBack')}
        </Button>
      </AppLink>
      {isCanEditArticle && (
        <AppLink to={getRouteArticleEdit(data.id)}>
          <Button variant="outline">
            {t('articles:editButton')}
          </Button>
        </AppLink>
      )}
      <HStack gap="8">
        <Avatar src={data.user?.avatar} alt="author avatar" size={32} />
        <Text boldText text={data.user.username} />
        <Text text={data.createdAt} />
      </HStack>
      <HStack gap="8">
        <Icon Svg={Eye} height={32} width={32} />
        <Text text={t('articles:views.{{count}} просмотров', { count: Number(data.views) })} />
      </HStack>
    </>
  );
});
