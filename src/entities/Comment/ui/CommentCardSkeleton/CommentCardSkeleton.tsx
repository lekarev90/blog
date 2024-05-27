import { memo } from 'react';

import { Skeleton } from '@/shared/ui/Skeleton';

import styles from './CommentCardSkeleton.module.scss';

export const CommentCardSkeleton = memo(() => (
  <div className={styles.container}>
    <div className={styles.header}>
      <Skeleton width={30} height={30} borderRadius="50%" />
      <Skeleton width={100} height={16} />
    </div>
    <Skeleton width="100%" height={50} className={styles.text} />
  </div>
));
