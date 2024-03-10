import { memo, useMemo } from 'react';
import classNames from 'classnames/bind';

import styles from './Avatar.module.scss';

const cx = classNames.bind(styles);

interface AvatarProps {
  className?: string;
  src: string;
  alt: string;
  size: number;
}

export const Avatar = memo(({
  className, src, alt, size,
}: AvatarProps) => {
  const style = useMemo(
    () => ({
      height: size || 100,
      width: size || 100,
    }),
    [size],
  );

  return (
    <img
      src={src}
      alt={alt}
      className={cx(styles.container, className)}
      style={style}
    />
  );
});
