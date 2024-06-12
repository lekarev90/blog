import { FC } from 'react';

import { Skeleton } from '@/shared/ui/Skeleton';

import styles from './ArticleDetailsLoading.module.scss';

export const ArticleDetailsLoading: FC = () => (
  <div className={styles.container}>
    <Skeleton
      borderRadius="50%"
      height={200}
      width={200}
    />
    <Skeleton
      className={styles.title}
      height={32}
      width={300}
    />
    <Skeleton
      height={24}
      width={600}
    />
    <Skeleton
      height={200}
      width="100%"
    />
    <Skeleton
      height={200}
      width="100%"
    />
  </div>
);
