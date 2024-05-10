import React, {
  InputHTMLAttributes, memo, useEffect, useRef,
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

export const _Input = <T extends string>({
  value,
  onChange,
  type = 'text',
  placeholder,
  autofocus,
  name,
  ...props
}: InputProps<T>) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(target.value, name);
  };

  return (
    <input
      placeholder={placeholder}
      ref={ref}
      className={styles.input}
      value={value}
      onChange={onChangeHandler}
      type={type}
      {...props}
    />
  );
};

export const Input = memo(_Input) as typeof _Input;
