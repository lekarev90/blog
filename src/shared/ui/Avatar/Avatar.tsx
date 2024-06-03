import { memo, useMemo } from 'react';
import classNames from 'classnames/bind';

import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton';
import { Icon } from '../Icon';

import DefaultAvatar from '@/shared/assets/icons/user-filled.svg';

import styles from './Avatar.module.scss';

const cx = classNames.bind(styles);

interface AvatarProps {
  className?: string;
  src? : string;
  alt: string;
  size?: number;
  invertedDefaultAvatar?: boolean;
}

export const Avatar = memo(({
  className, src, alt, size = 100, invertedDefaultAvatar,
}: AvatarProps) => {
  const style = useMemo(
    () => ({
      height: size,
      width: size,
    }),
    [size],
  );

  return (
    <AppImage
      fallback={<Skeleton height={size} width={size} borderRadius="12px" />}
      errorFallback={<Icon Svg={DefaultAvatar} inverted={invertedDefaultAvatar} />}
      src={src}
      alt={alt}
      className={cx(styles.container, className)}
      style={style}
    />
  );
});
