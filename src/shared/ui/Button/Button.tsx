import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Button.module.scss';

export enum ButtonVariants {
  CLEAR = 'clear',
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

export const Button: FC<ButtonProps> = ({
  className,
  children,
  variant = ButtonVariants.CLEAR,
  square,
  size = ButtonSize.M,
  ...props
}) => {
  const mods: Record<string, string | boolean> = {
    [styles[variant]]: variant,
    [styles.square]: square,
    [styles[size]]: size,
  };

  return (
    <button
      type="button"
      className={classNames({
        className: styles.container,
        mods,
        additional: [className],
      })}
      {...props}
    >
      {children}
    </button>
  );
};
