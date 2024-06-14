import { type ButtonHTMLAttributes, forwardRef, memo } from 'react';

import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);
/**
 * @deprecated
 */
export enum ButtonVariants {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outlineRed',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}
/**
 * @deprecated
 */
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
  isWide?: boolean
}

const _Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  variant = ButtonVariants.CLEAR,
  square,
  size = ButtonSize.M,
  disabled,
  isWide,
  ...props
}: ButtonProps, ref) => {
  const mods: Record<string, string | boolean | undefined> = {
    [variant]: variant,
    [size]: size,
    square,
    disabled,
    isWide,
  };

  const containerClassNames = cx(styles.container, className, mods);

  return (
    <button
      type="button"
      className={containerClassNames}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

/**
 * @deprecated
 */
export const Button = memo(_Button) as typeof _Button;
