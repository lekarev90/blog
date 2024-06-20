import { HTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);

export type TCardVariant = 'default' | 'outlined' | 'light'
type TCardPaddings = '0' | '8' | '16' | '24'
type TCardBorder = 'normal' | 'rounded' | 'partial'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: TCardVariant;
  padding?: TCardPaddings;
  borderRadius?: TCardBorder;
}

export const Card = ({
  className, children, variant = 'default', padding = '8', borderRadius = 'normal', ...props
}: CardProps) => (
  <div className={cx(styles.container, `variant-${variant}`, `padding-${padding}`, `borderRadius-${borderRadius}`, className)} {...props}>
    {children}
  </div>
);
