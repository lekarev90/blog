import { memo } from 'react';
import classNames from 'classnames/bind';

import styles from './ArticlesListSortOrder.module.scss';

const cx = classNames.bind(styles);

interface ArticlesListSortOrderProps {
  className?: string;
}

export const ArticlesListSortOrder = memo(({ className }: ArticlesListSortOrderProps) => (
  <div className={cx(styles.container, className)}>
    text
  </div>
));
