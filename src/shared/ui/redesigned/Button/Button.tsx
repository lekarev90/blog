import {
  type ButtonHTMLAttributes, forwardRef, memo, ReactNode,
} from 'react';

import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

export type TButtonVariants = 'clear' | 'outline' | 'filled' | 'dark' | 'outlineRed';

type TButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: TButtonVariants;
  size?: TButtonSize;
  isWide?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  fullWidth?: boolean;
}

const _Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className, children, variant = 'clear', size = 'm', disabled, isWide, addonLeft, addonRight, ...props
  }: ButtonProps, ref) => {
    const mods: Record<string, string | boolean | undefined> = {
      [variant]: variant,
      [size]: size,
      disabled,
      isWide,
      withAddonLeft: Boolean(addonLeft),
      withAddonRight: Boolean(addonRight),
    };

    const containerClassNames = cx(styles.container, className, mods);

    return (
      <button type="button" className={containerClassNames} disabled={disabled} ref={ref} {...props}>
        {addonLeft && (
          <div className={styles.addonLeft}>
            {addonLeft}
          </div>
        )}
        {children}
        {addonRight && (
          <div className={styles.addonRight}>
            {addonRight}
          </div>
        )}
      </button>
    );
  },
);

export const Button = memo(_Button) as typeof _Button;
