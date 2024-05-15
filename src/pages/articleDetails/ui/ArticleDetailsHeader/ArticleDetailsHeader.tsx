import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';
import { getIsCanEditArticle } from '../../model/selectors/articleDetails.selector';

import styles from './ArticleDetailsHeader.module.scss';

export const ArticleDetailsHeader = memo(({ id }: {id: string}) => {
  const { t } = useTranslation();

  const isCanEditArticle = useSelector(getIsCanEditArticle);

  return (
    <div className={styles.container}>
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
    </div>
  );
});
