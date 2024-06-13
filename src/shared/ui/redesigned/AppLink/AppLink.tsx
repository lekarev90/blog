import { memo } from 'react';

import classNames from 'classnames/bind';
import { type LinkProps, NavLink } from 'react-router-dom';

import styles from './AppLink.module.scss';

const cx = classNames.bind(styles);

export type TAppLinkVariant = 'primary'| 'red'

export interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: TAppLinkVariant;
  activeClassName: string;
}

export const AppLink = memo(({
  className, to, children, variant = 'primary', activeClassName, ...props
}: AppLinkProps) => (
  <NavLink
    to={to}
    className={({ isActive }) => cx(styles.container, className, isActive && activeClassName, {
      [variant]: variant,
    })}
    {...props}
  >
    {children}
  </NavLink>
));
