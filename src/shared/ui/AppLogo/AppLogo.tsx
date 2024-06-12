import { memo } from 'react';
import classNames from 'classnames/bind';

import Cat from '@/shared/assets/icons/cat.svg';
import { HStack } from '../Stack';

import styles from './AppLogo.module.scss';

const cx = classNames.bind(styles);

interface IAppLogoProps {
  className?: string;
}

export const AppLogo = memo(({ className }: IAppLogoProps) => (
  <HStack maxWidth justify="center" className={cx(styles.logoWrapper, className)}>
    <div className={styles.gradientBig} />
    <div className={styles.gradientSmall} />
    <Cat className={styles.cat} />
  </HStack>
));
