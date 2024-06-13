import { type ButtonHTMLAttributes, forwardRef, memo } from 'react';

import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

type TButtonVariants = 'clear' | 'outline'

type TButtonSize = 'm' | 'l' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: TButtonVariants;
  square?: boolean;
  size?: TButtonSize;
  isWide?: boolean
}

const _Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  variant = 'clear',
  square,
  size = 'm',
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

export const Button = memo(_Button) as typeof _Button;
