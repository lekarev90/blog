import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);

export const enum ECardTheme {
  DEFAULT = 'default',
  OUTLINED = 'outlined',
  OUTLINED_SECONDARY = 'outlined_secondary',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string;
  children: ReactNode;
  theme?: ECardTheme;
}

export const Card = ({
  className, children, theme = ECardTheme.DEFAULT, ...props
}: CardProps) => (
  <div
    className={cx(styles.container, { [`theme-${theme}`]: theme }, className)}
    {...props}
  >
    {children}
  </div>
);
