import {
  Fragment, ReactNode, useCallback, useMemo,
} from 'react';

import {
  Field, Label, Listbox as HListBox, ListboxButton, ListboxOption, ListboxOptions,
} from '@headlessui/react';
import classNames from 'classnames/bind';

import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';

import { Button } from '../Button';
import { Icon } from '../Icon';

import styles from './ListBox.module.scss';

export interface IListBoxItem<T extends string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string, N extends string> {
  className?: string;
  items: IListBoxItem<T>[];
  disabled?: boolean;
  value?: T;
  name: N,
  defaultValue?: T;
  onChange: (value: T, name: N) => void;
  label?: string
}

const cx = classNames.bind(styles);

export const ListBox = <T extends string, N extends string>({
  className, items, disabled, value, defaultValue, onChange, label, name,
}: ListBoxProps<T, N>) => {
  const onChangeHandler = useCallback((value: T) => {
    onChange(value, name);
  }, [name, onChange]);

  const selectedItem = useMemo(() => items.find((item) => item.value === value), [items, value]);

  return (
    <Field className={styles.field} disabled={disabled}>
      {label && (
      <Label>
        {label}
      </Label>
      )}
      <HListBox as="div" className={cx(styles.container, className)} value={value || defaultValue} onChange={onChangeHandler}>
        <ListboxButton as={Button} variant="filled" className={styles.button} addonRight={<Icon Svg={ArrowIcon} />}>
          {selectedItem?.content || defaultValue}
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
};
