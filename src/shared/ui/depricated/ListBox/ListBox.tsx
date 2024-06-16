import { Fragment, ReactNode } from 'react';

import {
  Field, Label, Listbox as HListBox, ListboxButton, ListboxOption, ListboxOptions,
} from '@headlessui/react';
import classNames from 'classnames/bind';

import { Button, ButtonVariants } from '../Button';

import styles from './ListBox.module.scss';

export interface IListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

const cx = classNames.bind(styles);

interface ListBoxProps {
  className?: string;
  items: IListBoxItem[];
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  label?: string
}

/**
 * @deprecated
 */

export const ListBox = ({
  className, items, disabled, value, defaultValue, onChange, label,
}: ListBoxProps) => (
  <Field disabled={disabled}>
    {label && (
      <Label>
        {label}
      </Label>
    )}
    <HListBox as="div" className={cx(styles.container, className)} value={value} onChange={onChange}>
      <ListboxButton as={Button} variant={ButtonVariants.OUTLINE} className={styles.button}>
        {value || defaultValue}
      </ListboxButton>
      <ListboxOptions
        as="ul"
        anchor={{
          to: 'bottom start',
          gap: 8,
        }}
        className={styles.options}
      >
        {items.map(({ value, disabled, content }) => (
          <ListboxOption key={value} value={value} disabled={disabled} as={Fragment}>
            {({ focus, selected, disabled }) => (
              <li
                className={cx(styles.option, {
                  focus,
                  selected,
                  disabled,
                })}
              >
                {content}
              </li>
            )}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </HListBox>
  </Field>
);
