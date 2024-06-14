import { ComponentProps, ElementType } from 'react';

import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps <T extends ElementType> = Omit<FlexProps, 'direction'> & {
  Component?: T;
};

export const HStack = <T extends ElementType = 'div'>({ children, ...props }: HStackProps<T> & ComponentProps<T>) => (
  <Flex direction="row" {...props}>
    {children}
  </Flex>
);
