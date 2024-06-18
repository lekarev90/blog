import { FC } from 'react';

import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/depricated/Skeleton';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

import styles from './ArticleDetailsLoading.module.scss';

export const ArticleDetailsLoading: FC = () => (
  <VStack gap="24">
    <ToggleFeatures
      feature="isOldDesign"
      on={(
        <>
          <SkeletonDeprecated
            borderRadius="50%"
            height={200}
            width={200}
          />
          <SkeletonDeprecated
            className={styles.title}
            height={32}
            width={300}
          />
          <SkeletonDeprecated
            height={24}
            width={600}
          />
          <SkeletonDeprecated
            height={200}
            width="100%"
          />
          <SkeletonDeprecated
            height={200}
            width="100%"
          />
        </>
)}
      off={(
        <>
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
        </>
)}
    />
  </VStack>
);
