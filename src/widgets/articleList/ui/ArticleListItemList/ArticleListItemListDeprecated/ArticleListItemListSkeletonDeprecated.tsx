import { memo } from 'react';

import { Card } from '@/shared/ui/depricated/Card';
import { Skeleton } from '@/shared/ui/depricated/Skeleton';

import styles from './ArticleListItemListDeprecated.module.scss';

export const ArticleListItemListSkeletonDeprecated = memo(() => (
  <Card className={styles.container}>
    <div className={styles.header}>
      <Skeleton width={30} height={30} borderRadius="50%" />
      <Skeleton width={150} height={16} className={styles.user} />
      <Skeleton width={150} height={16} className={styles.date} />
    </div>
    <Skeleton width={250} height={24} className={styles.title} />
    <Skeleton width={150} height={16} className={styles.types} />
    <Skeleton height={200} className={styles.img} />
    <div className={styles.footer}>
      <Skeleton width={150} height={36} />
      <Skeleton width={200} height={16} className={styles.views} />
    </div>
  </Card>
));
