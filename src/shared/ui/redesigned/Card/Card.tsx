import { HTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);

type TCardTheme = 'default' | 'outlined' | 'light'
type TCardPaddings = '0' | '8' | '16' | '24'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: TCardTheme;
  padding?: TCardPaddings;
}

export const Card = ({
  className, children, variant = 'default', padding = '8', ...props
}: CardProps) => (
  <div className={cx(styles.container, { [`variant-${variant}`]: variant, [`padding-${padding}`]: padding }, className)} {...props}>
    {children}
  </div>
);
