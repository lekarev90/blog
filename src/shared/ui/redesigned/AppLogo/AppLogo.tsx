import { memo } from 'react';

import classNames from 'classnames/bind';

import Cat from '@/shared/assets/icons/cat.svg';

import { Icon } from '../../depricated/Icon';
import { HStack } from '../../depricated/Stack';

import styles from './AppLogo.module.scss';

const cx = classNames.bind(styles);

interface IAppLogoProps {
  className?: string;
  height?: number;
  width?: number;
}

export const AppLogo = memo(({ className, height = 150, width = 150 }: IAppLogoProps) => (
  <HStack maxWidth justify="center" className={cx(styles.logoWrapper, className)}>
    <div className={styles.gradientBig} />
    <div className={styles.gradientSmall} />
    <Icon Svg={Cat} className={styles.cat} height={height} width={width} />
  </HStack>
));
