import { ChangeEvent, useCallback, useMemo } from 'react';

import classNames from 'classnames/bind';

import { VStack } from '../Stack';

import styles from './Select.module.scss';

const cx = classNames.bind(styles);

export interface SelectOptions<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string, N extends string> {
  className?: string;
  name: N;
  label?: string;
  options?: SelectOptions<T>[];
  value?: T;
  onChange: (value: T, name: N) => void;
  isReadonly?: boolean;
}

export const Select = <T extends string, N extends string>({
  className, label, options, value, onChange, name, isReadonly,
}: SelectProps<T, N>) => {
  const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as T, name);
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

// export const Select = memo(_Select) as typeof _Select;
