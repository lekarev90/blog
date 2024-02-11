import { type ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

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

export const Button = ({
  className,
  children,
  variant = ButtonVariants.CLEAR,
  square,
  size = ButtonSize.M,
  ...props
}: ButtonProps) => {
  const mods: Record<string, string | boolean> = {
    [styles[variant]]: variant,
    [styles.square]: square,
    [styles[size]]: size,
  };

  const containerClassNames = cx(styles.container, className, mods);

  return (
    <button
      type="button"
      className={containerClassNames}
      {...props}
    >
      {children}
    </button>
  );
};
