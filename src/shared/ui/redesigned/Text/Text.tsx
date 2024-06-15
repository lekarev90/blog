import React, { HTMLProps, memo } from 'react';

import classNames from 'classnames/bind';

import styles from './Text.module.scss';

const cx = classNames.bind(styles);

type TTextVariant = 'primary' | 'error' | 'accent';

type TTextSize = 's' | 'm' | 'l';

interface ISectionTitleProps {
  className?: string;
  title?: string;
  titleTag?: string;
  text?: string;
  textTag?: string;
  variant?: TTextVariant;
  size?: TTextSize;
  descriptionClassName?: string;
  titleClassName?: string;
  tooltipDescriptionText?: string;
  titleDataTestId?: string;
  textDataTestId?: string;
}

type HTMLTagProps<T> = HTMLProps<T> & { [key: string]: any };

export const Text = memo(
  ({
    className,
    title,
    text,
    titleTag = 'h3',
    textTag,
    variant = 'primary',
    size = 'm',
    titleDataTestId,
    textDataTestId,
    descriptionClassName,
    titleClassName,
  }: ISectionTitleProps) => {
    const TitleWrapperTag = titleTag || 'h3';
    const TextWrapperTag = textTag || 'p';

    const titleProps: HTMLTagProps<typeof TitleWrapperTag> = {
      className: cx(styles.title, titleClassName),
      children: title,
      title,
      'data-testid': titleDataTestId,
    };

    const textProps: HTMLTagProps<typeof TextWrapperTag> = {
      className: cx(styles.text, descriptionClassName),
      children: text,
      title: text,
      'data-testid': textDataTestId,
    };

    return (
      <div
        className={cx(styles.container, className, {
          [variant]: variant,
          [`size_${size}`]: size,
        })}
      >
        {title && <TitleWrapperTag {...titleProps} />}
        {text && <TextWrapperTag {...textProps} />}
      </div>
    );
  },
);
