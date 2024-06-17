import { memo } from 'react';

import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import styles from './ArticleListItemListRedesigned.module.scss';

export const ArticleListItemListSkeletonRedesigned = memo(() => (
  <VStack gap="16" maxWidth Component={Card} padding="24" data-testid="ArticlesList.Item.List">
    <HStack gap="8" align="center" className={styles.header}>
      <Skeleton height={32} width={32} borderRadius="50%" />
      <Skeleton height={24} width={60} />
      <Skeleton height={24} width={85} />
    </HStack>
    <VStack gap="8">
      <Skeleton height={32} width={300} />
      <Skeleton height={24} width={360} />
    </VStack>
    <Skeleton height={420} width="100%" />
    <Skeleton height={200} width="100%" />
    <Skeleton height={20} width={60} />
    <HStack align="center" justify="between" maxWidth>
      <Skeleton height={38} width={130} />
      <HStack gap="8">
        <Skeleton height={32} width={32} borderRadius="50%" />
        <Skeleton height={24} width={40} />
      </HStack>
    </HStack>
  </VStack>
));
