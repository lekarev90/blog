import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';

import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps<T extends string> extends HTMLInputProps {
  className?: string;
  name: T;
  value?: string;
  onChange?: (value: string, name: T) => void;
  type?: string;
  placeholder?: string;
  autofocus?: boolean;
}

/**
 * @deprecated
 */
export const _Input = <T extends string>({
  value = '',
  onChange,
  type = 'text',
  placeholder,
  autofocus,
  name,
  ...props
}: InputProps<T>) => {
  const ref = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
    onChange?.(target.value, name);
  };

  return (
    <input
      placeholder={placeholder}
      ref={ref}
      className={styles.input}
      value={inputValue}
      onChange={onChangeHandler}
      type={type}
      {...props}
    />
  );
};

/**
 * @deprecated
 */
export const Input = memo(_Input) as typeof _Input;
