import classNames from 'classnames/bind';
import React, {
  InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string
  onChange?: (value: string) => void
  type?: string
  placeholder?: string
  autofocus?: boolean
}

export const Input = memo(({
  className, value, onChange, type = 'text', placeholder, autofocus,
}: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(target.value);
  };

  return (
    <div className={cx(styles.container, className)}>
      {placeholder && (
        <div className={styles.placeholder}>
          {placeholder}
        </div>
      )}
      <input
        ref={ref}
        className={styles.input}
        value={value}
        onChange={onChangeHandler}
        type={type}
      />
    </div>
  );
});
