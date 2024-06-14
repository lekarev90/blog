import { ComponentProps, ElementType } from 'react';

import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps <T extends ElementType> = Omit<FlexProps, 'direction'> & {
  Component?: T;
};

export const VStack = <T extends ElementType = 'div'>({ children, align = 'normal', ...props }: VStackProps<T> & ComponentProps<T>) => (
  <Flex direction="column" align={align} {...props}>
    {children}
  </Flex>
);
