import { memo, ReactNode } from 'react';

import { Popover as HPopover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { AnchorProps } from '@headlessui/react/dist/internal/floating';
import classNames from 'classnames/bind';

import { Button } from '../Button/Button';

import styles from './Popover.module.scss';

const cx = classNames.bind(styles);

interface PopoverProps {
  panelClassName?: string;
  children: ReactNode;
  TriggerComponent: ReactNode;
  anchor?: AnchorProps
}

const defaultAnchor: AnchorProps = {
  to: 'bottom end',
  gap: '10',
};

export const Popover = memo(({
  children, TriggerComponent, anchor = defaultAnchor, panelClassName,
}: PopoverProps) => (
  <HPopover>
    <PopoverButton as={Button}>
      {TriggerComponent}
    </PopoverButton>
    <PopoverPanel anchor={anchor} className={cx(styles.panel, panelClassName)}>
      {children}
    </PopoverPanel>
  </HPopover>
));
