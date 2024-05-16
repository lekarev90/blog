import { ComponentProps, ElementType, ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './Flex.module.scss';

export type FlexJustify = 'start' | 'end' | 'center' | 'between';
export type FlexAlign = 'start' | 'end' | 'center' | 'stretch';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '2' | '4' | '8' | '16' | '32';

export interface FlexProps {
  className?: string;
  children?: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  gap?: FlexGap;
  maxWidth?: boolean;
  flexWrap?: boolean
}

const cx = classNames.bind(styles);

export const Flex = <T extends ElementType = 'div'>({
  className,
  children,
  justify = 'start',
  align = 'center',
  direction = 'row',
  gap,
  maxWidth,
  flexWrap = true,
  Component = 'div',
  ...props
}: FlexProps & ComponentProps<T>) => {
  const classNames = {
    [`justify-${justify}`]: justify,
    [`align-${align}`]: align,
    [`direction-${direction}`]: direction,
    [`gap-${gap}`]: gap,
    maxWidth,
    flexWrap,
  };

  return (
    <Component className={cx(styles.container, className, classNames)} {...props}>
      {children}
    </Component>
  );
};
