import { memo } from 'react';

import { Text, TextSize } from '@/shared/ui/Text/Text';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Card } from '@/shared/ui/Card/Card';

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';

import { IArticle } from '@/entities/Article';
import { AppLink } from '@/shared/ui/AppLink/AppLink';

import styles from './ArticleListItemGrid.module.scss';
import { RouterPath } from '@/shared/const/router';

export const ArticleListItemGrid = memo(({
  img, title, createdAt, types, views, id,
}: IArticle) => (
  <AppLink to={`${RouterPath.articles}/${id}`}>
    <Card className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={img} alt={title} className={styles.img} />
        <Text size={TextSize.S} text={createdAt} className={styles.dateWrapper} descriptionClassName={styles.dateText} />
      </div>
      <div className={styles.infoWrapper}>
        <Text text={types.join(', ')} className={styles.typesWrapper} descriptionClassName={styles.typesText} />
        <Text text={String(views)} className={styles.views} />
        <Icon Svg={EyeIcon} />
      </div>
      <Text text={title} className={styles.title} />
    </Card>
  </AppLink>
));
