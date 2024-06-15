import { Fragment, memo, ReactNode } from 'react';

import {
  Menu, MenuButton, MenuItem, MenuItems,
} from '@headlessui/react';
import classNames from 'classnames/bind';

import { AppLink } from '../AppLink/AppLink';
import { Button } from '../Button/Button';

import styles from './Dropdown.module.scss';

const cx = classNames.bind(styles);

export interface DropdownItem {
  value: string;
  to?: string;
  onClick?: () => void;
}

interface DropdownProps {
  TriggerComponent: ReactNode;
  items: DropdownItem[];
}

export const Dropdown = memo(({ items, TriggerComponent }: DropdownProps) => (
  <Menu>
    <MenuButton as="div" className={styles.triggerWrapper}>
      {TriggerComponent}
    </MenuButton>
    <MenuItems
      as="ul"
      className={styles.menuItems}
      anchor={{
        to: 'bottom',
        gap: 8,
        padding: 16,
      }}
    >
      {items.map(({ value, to, onClick }) => (
        <MenuItem key={value} as={Fragment}>
          {({ focus }) => (
            <li className={cx(styles.menuItem, { focus })}>
              {to ? (
                <AppLink to={to}>
                  {value}
                </AppLink>
              ) : (
                <Button onClick={onClick}>
                  {value}
                </Button>
              )}
            </li>
          )}
        </MenuItem>
      ))}
    </MenuItems>
  </Menu>
));
