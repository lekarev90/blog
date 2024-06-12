import { type FC } from 'react';

import { Loader } from '@/shared/ui/depricated/Loader';

import styles from './PageLoader.module.scss';

export const PageLoader: FC = () => (
  <div className={styles.container}>
    <Loader />
  </div>
);
