import { type ButtonHTMLAttributes, memo } from 'react';

import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

export enum ButtonVariants {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariants;
  square?: boolean;
  size?: ButtonSize;
}

export const Button = memo(({
  className,
  children,
  variant = ButtonVariants.CLEAR,
  square,
  size = ButtonSize.M,
  disabled,
  ...props
}: ButtonProps) => {
  const mods: Record<string, string | boolean> = {
    [variant]: variant,
    [size]: size,
    square,
    disabled,
  };

  const containerClassNames = cx(styles.container, className, mods);

  return (
    <button
      type="button"
      className={containerClassNames}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});
