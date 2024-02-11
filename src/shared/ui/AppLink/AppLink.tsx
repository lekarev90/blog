import classNames from 'classnames';
import { Link, type LinkProps } from 'react-router-dom';

import styles from './AppLink.module.scss';

const cx = classNames.bind(styles);

export enum AppLinkColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  color?: AppLinkColor;
}

export const AppLink = ({
  className, to, children, color = AppLinkColor.PRIMARY, ...props
}: AppLinkProps) => {
  const containerClassNames = cx(styles.container, className, { [styles[color]]: color });

  return (
    <Link
      to={to}
      className={containerClassNames}
      {...props}
    >
      {children}
    </Link>
  );
};
