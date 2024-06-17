import { memo } from 'react';

import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import styles from './ArticleListItemGridRedesigned.module.scss';

export const ArticleListItemGridSkeletonRedesigned = memo(() => (
  <VStack
    gap="8"
    flexWrap={false}
    className={styles.card}
    Component={Card}
    padding="0"
    borderRadius="rounded"
    data-testid="ArticlesList.Item.Grid"
  >
    <Skeleton width={240} height={140} />
    <VStack gap="8" className={styles.infoWrapperSkeleton} flexWrap={false}>
      <Skeleton height={32} width={100} />
      <Skeleton height={32} width={120} />
      <VStack gap="4" maxWidth justify="end" className={styles.footer}>
        <HStack justify="between" maxWidth>
          <Skeleton height={24} width={85} />
          <HStack gap="4" align="center">
            <Skeleton height={32} width={32} borderRadius="50%" />
            <Skeleton height={24} width={28} />
          </HStack>
        </HStack>
        <HStack gap="8">
          <Skeleton height={32} width={32} borderRadius="50%" />
          <Skeleton height={24} width={80} />
        </HStack>
      </VStack>
    </VStack>
  </VStack>
));
