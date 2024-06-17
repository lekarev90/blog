import { CSSProperties } from 'react';

import classNames from 'classnames/bind';

import styles from './Skeleton.module.scss';

const cx = classNames.bind(styles);

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
  inverted?: boolean
}

export const Skeleton = ({
  className,
  width,
  height,
  borderRadius,
  inverted,
}: SkeletonProps) => {
  const style: CSSProperties = {
    width,
    height,
    borderRadius,
  };

  return <div className={cx(styles.container, className, { inverted })} style={style} />;
};
