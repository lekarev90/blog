import { memo, useCallback } from 'react';
import classNames from 'classnames/bind';

import { Card, ECardTheme } from 'shared/ui/Card/Card';

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
}

const _Tabs = <T extends string>({
  className, tabs, value, onTabClick, tabClassName,
}: TabsProps<T>) => {
  const clickHandle = useCallback(
    (tab: TabItem<T>) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  return (
    <div className={cx(styles.container, className)}>
      {tabs.map((tab) => {
        const isActive = tab.value === value ? ECardTheme.DEFAULT : ECardTheme.OUTLINED;

        return (
          <Card className={cx(tabClassName)} theme={isActive} key={tab.value} onClick={clickHandle(tab)}>
            {tab.content}
          </Card>
        );
      })}
    </div>
  );
};

export const Tabs = memo(_Tabs) as typeof _Tabs;
