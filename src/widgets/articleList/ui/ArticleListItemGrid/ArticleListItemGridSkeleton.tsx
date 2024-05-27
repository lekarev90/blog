import { memo } from 'react';
import { Card } from '@/shared/ui/Card';

import { Skeleton } from '@/shared/ui/Skeleton';

import styles from './ArticleListItemGrid.module.scss';

export const ArticleListItemGridSkeleton = memo(() => (
  <Card className={styles.container}>
    <div className={styles.imageWrapper}>
      <Skeleton width={200} height={200} className={styles.img} />
    </div>
    <div className={styles.infoWrapper}>
      <Skeleton width={130} height={16} className={styles.types} />
    </div>
    <Skeleton width={160} height={16} className={styles.title} />
  </Card>
));
