import React, {
  InputHTMLAttributes, ReactNode, memo, useEffect, useRef, useState,
} from 'react';

import classNames from 'classnames/bind';

import { VStack } from '../Stack';

import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

type TInputHeight = 's' | 'm' | 'l';

interface InputProps<T extends string> extends HTMLInputProps {
  inputClassName?: string;
  wrapperClassName?: string;
  name: T;
  value?: string;
  onChange?: (value: string, name: T) => void;
  type?: string;
  placeholder?: string;
  autofocus?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  label?: string;
  disableLabelArea?: boolean;
  inputHeight?: TInputHeight;
  disabled?: boolean;
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
  inputClassName,
  label,
  disableLabelArea,
  inputHeight = 'm',
  disabled,
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
    <VStack gap="4">
      {!disableLabelArea && (
      <span className={styles.labelArea}>
        {label}
      </span>
      )}
      <div
        className={cx(styles.wrapper, wrapperClassName, {
          disabled,
          withAddonLeft: addonLeft,
          withAddonRight: addonRight,
          isFocused,
        })}
      >
        {addonLeft && (
        <div className={styles.addonLeft}>
          {addonLeft}
        </div>
        )}
        <input
          placeholder={placeholder}
          ref={ref}
          className={cx(styles.input, inputClassName, `inputHeight-${inputHeight}`)}
          value={inputValue}
          onChange={onChangeHandler}
          type={type}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
          {...props}
        />
        {addonRight && (
        <div className={styles.addonRight}>
          {addonRight}
        </div>
        )}
      </div>
    </VStack>
  );
};

export const Input = memo(_Input) as typeof _Input;
