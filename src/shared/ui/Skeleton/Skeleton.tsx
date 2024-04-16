import classNames from 'classnames/bind';
import { CSSProperties } from 'react';

import styles from './Skeleton.module.scss';

const cx = classNames.bind(styles);

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
}

export const Skeleton = ({
  className,
  width,
  height,
  borderRadius,
}: SkeletonProps) => {
  const style: CSSProperties = {
    width,
    height,
    borderRadius,
  };

  return (
    <div
      className={cx(styles.container, className)}
      style={style}
    />
  );
};
