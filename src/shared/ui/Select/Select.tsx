import classNames from 'classnames/bind';
import {
  ChangeEvent, memo, useCallback, useMemo,
} from 'react';

import { VStack } from '../Stack';

import styles from './Select.module.scss';

const cx = classNames.bind(styles);

export interface SelectOptions {
  value: string;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  name: T;
  label?: string;
  options?: SelectOptions[];
  value?: string;
  onChange: (value: string, name: T) => void;
  isReadonly?: boolean;
}

const _Select = <T extends string>({
  className, label, options, value, onChange, name, isReadonly,
}: SelectProps<T>) => {
  const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value, name);
  }, [name, onChange]);

  const optionList = useMemo(() => options?.map((option) => (
    <option
      className={styles.option}
      value={option.value}
      key={option.value}
    >
      {option.content}
    </option>
  )), [options]);

  return (
    <VStack gap="2" maxWidth className={cx(styles.container, className, { withLabel: label })}>
      {label && (
        <span className={styles.label}>
          {label}
        </span>
      )}
      <select
        className={styles.select}
        value={value}
        name={name}
        onChange={onChangeHandler}
        disabled={isReadonly}
      >
        {optionList}
      </select>
    </VStack>
  );
};

export const Select = memo(_Select) as typeof _Select;
