import { type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './AppLink.module.scss';

export enum AppLinkColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  color?: AppLinkColor;
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  to,
  children,
  color = AppLinkColor.PRIMARY,
  ...props
}) => (
  <Link
    to={to}
    className={classNames({
      className: styles.container,
      mods: { [styles[color]]: color },
      additional: [className],
    })}
    {...props}
  >
    {children}
  </Link>
);
