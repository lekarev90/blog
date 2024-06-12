import { memo, ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

interface IMainLayoutProps {
  className?: string;
  header: ReactNode;
  content: ReactNode;
  sidebar: ReactNode;
  toolbar?: ReactNode;
}

export const MainLayout = memo(({
  className, header, toolbar, sidebar, content,
}: IMainLayoutProps) => (
  <div className={cx(styles.container, className)}>
    <div className={styles.sidebar}>
      {sidebar}
    </div>
    <div className={styles.content}>
      {content}
    </div>
    <div className={styles.rightbar}>
      <div className={styles.header}>
        {header}
      </div>
      <div className={styles.toolbar}>
        {toolbar}
      </div>
    </div>
  </div>
));
