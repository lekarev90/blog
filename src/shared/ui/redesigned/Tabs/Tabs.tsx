import { memo, useCallback } from 'react';

import classNames from 'classnames/bind';

import { Card, TCardVariant } from '../Card/Card';
import { TFlexGap } from '../Stack';
import { Flex, TFlexDirection } from '../Stack/Flex/Flex';

import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

export interface TabItem<T extends string> {
  value: T;
  content: any;
}

interface TabsProps<T extends string> {
  className?: string;
  tabClassName?: string;
  tabs: TabItem<T>[];
  value: T;
  onTabClick: (tab: TabItem<T>) => void;
  direction?: TFlexDirection;
  gap?: TFlexGap;
}

const _Tabs = <T extends string>({
  className, tabs, value, onTabClick, tabClassName, direction = 'row', gap = '8',
}: TabsProps<T>) => {
  const clickHandle = useCallback(
    (tab: TabItem<T>) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <Flex direction={direction} gap={gap} className={cx(styles.container, className)}>
      {tabs.map((tab) => {
        const isActive: TCardVariant = tab.value === value ? 'default-outlined' : 'light';

        return (
          <Card
            className={cx(tabClassName, { isActive })}
            variant={isActive}
            key={tab.value}
            onClick={clickHandle(tab)}
            borderRadius="rounded"
          >
            {tab.content}
          </Card>
        );
      })}
    </Flex>
  );
};

export const Tabs = memo(_Tabs) as typeof _Tabs;
