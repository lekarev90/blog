import { memo } from 'react';

import { IArticle } from '@/entities/Article';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text, TextSize } from '@/shared/ui/Text';

import styles from './ArticleListItemGrid.module.scss';

export const ArticleListItemGrid = memo(({
  img, title, createdAt, types, views, id,
}: IArticle) => (
  <AppLink to={getRouteArticleDetails(id)}>
    <Card className={styles.container} data-testid="ArticlesList.Item.Grid">
      <div className={styles.imageWrapper}>
        <AppImage fallback={<Skeleton width={200} height={200} />} src={img} alt={title} className={styles.img} />
        <Text size={TextSize.S} text={createdAt} className={styles.dateWrapper} descriptionClassName={styles.dateText} />
      </div>
      <div className={styles.infoWrapper}>
        <Text text={types.join(', ')} className={styles.typesWrapper} descriptionClassName={styles.typesText} />
        <Text text={String(views)} className={styles.views} />
        <Icon Svg={EyeIcon} width={20} height={20} />
      </div>
      <Text text={title} className={styles.title} />
    </Card>
  </AppLink>
));
