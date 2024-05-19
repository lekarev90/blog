import React, { HTMLProps, memo } from 'react';

import classNames from 'classnames/bind';

import styles from './Text.module.scss';

const cx = classNames.bind(styles);

export enum TextVariant {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}

export enum TextSize {
  S = 's',
  M = 'm',
  L = 'l',
}

interface SectionTitleProps {
  className?: string;
  title?: string;
  titleTag?: string;
  text?: string;
  textTag?: string;
  variant?: TextVariant;
  size?: TextSize;
  descriptionClassName?: string;
  titleClassName?: string;
  tooltipDescriptionText?: string;
  'data-testid'?: string;
}

type HTMLTagProps<T> = HTMLProps<T> & { [key: string]: any };

export const Text = memo(
  ({
    className,
    title,
    text,
    titleTag = 'h3',
    textTag,
    variant = TextVariant.PRIMARY,
    size = TextSize.M,
    'data-testid': dataTestId = 'TEXT',
    descriptionClassName,
    titleClassName,
  }: SectionTitleProps) => {
    const TitleWrapperTag = titleTag || 'h3';
    const TextWrapperTag = textTag || 'p';

    const titleProps: HTMLTagProps<typeof TitleWrapperTag> = {
      className: cx(styles.title, titleClassName),
      children: title,
      title,
      'data-testid': `${dataTestId}.Title`,
    };

    const textProps: HTMLTagProps<typeof TextWrapperTag> = {
      className: cx(styles.text, descriptionClassName),
      children: text,
      title: text,
      'data-testid': `${dataTestId}.Text`,
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
