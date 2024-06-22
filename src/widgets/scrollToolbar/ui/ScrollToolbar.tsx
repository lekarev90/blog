import { ScrollToTopButton } from '@/features/scrollToTopButton';
import { VStack } from '@/shared/ui/redesigned/Stack';

import styles from './ScrollToolbar.module.scss';

export const ScrollToolbar = () => (
  <VStack justify="center" align="center" className={styles.container}>
    <ScrollToTopButton />
  </VStack>
);
