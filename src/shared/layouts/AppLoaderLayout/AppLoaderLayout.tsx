import { memo } from 'react';

import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import { MainLayout } from '../MainLayout';

import styles from './AppLoaderLayout.module.scss';

export const AppLoaderLayout = memo(() => (
  <MainLayout
    header={(
      <HStack className={styles.header}>
        <Skeleton width={40} height={40} borderRadius="50%" />
      </HStack>
      )}
    content={(
      <VStack gap="16" className={styles.content} flexWrap={false}>
        <Skeleton width="70%" height={32} borderRadius="16px" />
        <Skeleton width="40%" height={20} borderRadius="16px" />
        <Skeleton width="50%" height={20} borderRadius="16px" />
        <Skeleton width="30%" height={32} borderRadius="16px" />
        <Skeleton width="80%" height="40%" borderRadius="16px" />
        <Skeleton width="80%" height="40%" borderRadius="16px" />
      </VStack>
      )}
    sidebar={<Skeleton width={220} height="100%" borderRadius="12px" />}
  />
));
