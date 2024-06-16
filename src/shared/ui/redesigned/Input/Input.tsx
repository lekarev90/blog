import React, {
  InputHTMLAttributes, ReactNode, memo, useEffect, useRef, useState,
} from 'react';

import classNames from 'classnames/bind';

import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps<T extends string> extends HTMLInputProps {
  wrapperClassName?: string;
  name: T;
  value?: string;
  onChange?: (value: string, name: T) => void;
  type?: string;
  placeholder?: string;
  autofocus?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

const cx = classNames.bind(styles);

export const _Input = <T extends string>({
  value = '',
  onChange,
  type = 'text',
  placeholder,
  autofocus,
  name,
  addonLeft,
  addonRight,
  wrapperClassName,
  ...props
}: InputProps<T>) => {
  const ref = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
      setIsFocused(true);
    }
  }, [autofocus]);

  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
    onChange?.(target.value, name);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  return (
    <div className={cx(styles.wrapper, wrapperClassName, { withAddonLeft: addonLeft, withAddonRight: addonRight, isFocused })}>
      {addonLeft && (
      <div className={styles.addonLeft}>
        {addonLeft}
      </div>
      )}
      <input
        placeholder={placeholder}
        ref={ref}
        className={styles.input}
        value={inputValue}
        onChange={onChangeHandler}
        type={type}
        onBlur={onBlur}
        onFocus={onFocus}
        {...props}
      />
      {addonRight && (
      <div className={styles.addonRight}>
        {addonRight}
      </div>
      )}
    </div>
  );
};

export const Input = memo(_Input) as typeof _Input;
