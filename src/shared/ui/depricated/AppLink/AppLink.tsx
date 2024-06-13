import { memo } from 'react';

import classNames from 'classnames/bind';
import { Link, type LinkProps } from 'react-router-dom';

import styles from './AppLink.module.scss';

const cx = classNames.bind(styles);

export type TAppLinkVariant = 'primary'| 'secondary'

export interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: TAppLinkVariant;
}

export const AppLink = memo(({
  className, to, children, variant = 'secondary', ...props
}: AppLinkProps) => {
  const containerClassNames = cx(styles.container, className, { [variant]: variant });

  return (
    <Link
      to={to}
      className={containerClassNames}
      {...props}
    >
      {children}
    </Link>
  );
});
