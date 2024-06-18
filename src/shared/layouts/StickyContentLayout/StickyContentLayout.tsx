import { memo, ReactElement } from 'react';

import styles from './StickyContentLayout.module.scss';

interface IStickyContentLayoutProps {
    left?: ReactElement;
    content: ReactElement;
    right?: ReactElement;
}

export const StickyContentLayout = memo(({
  content, left, right,
}: IStickyContentLayoutProps) => (
  <div className={styles.container}>
    {right && (
    <div className={styles.left}>
      {left}
    </div>
    )}
    <div className={styles.content}>
      {content}
    </div>
    {right && (
    <div className={styles.right}>
      {right}
    </div>
    )}
  </div>
));
