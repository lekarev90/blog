import React, { HTMLProps, memo } from 'react';

import classNames from 'classnames/bind';

import styles from './Text.module.scss';

const cx = classNames.bind(styles);

export enum TextVariant {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface SectionTitleProps {
  className?: string;
  title?: string;
  titleTag?: string;
  text?: string;
  textTag?: string;
  variant?: TextVariant
}

type HTMLTagProps<T> = HTMLProps<T> & { [key: string]: any };

export const Text = memo(({
  className, title, text, titleTag = 'h3', textTag, variant = TextVariant.PRIMARY,
}: SectionTitleProps) => {
  const TitleWrapperTag = titleTag || 'h3';
  const DescWrapperTag = textTag || 'p';

  const titleProps: HTMLTagProps<typeof TitleWrapperTag> = { className: styles.title, children: title };
  const descProps: HTMLTagProps<typeof DescWrapperTag> = { className: styles.text, children: text };

  return (
    <div className={cx(styles.container, className, { [variant]: variant })}>
      {title && <TitleWrapperTag {...titleProps} />}
      {text && <DescWrapperTag {...descProps} />}
    </div>
  );
});
