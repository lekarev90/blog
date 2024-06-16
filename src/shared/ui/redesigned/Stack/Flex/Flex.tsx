import { ComponentProps, ElementType, ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from './Flex.module.scss';

export type TFlexJustify = 'start' | 'end' | 'center' | 'between';
export type TFlexAlign = 'start' | 'end' | 'center' | 'stretch';
export type TFlexDirection = 'row' | 'column';
export type TFlexGap = '2' | '4' | '8' | '16' | '24' | '32';

export interface FlexProps {
  className?: string;
  children?: ReactNode;
  justify?: TFlexJustify;
  align?: TFlexAlign;
  direction: TFlexDirection;
  gap?: TFlexGap;
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
