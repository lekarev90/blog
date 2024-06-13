import { memo } from 'react';

import classNames from 'classnames/bind';

import styles from './Overlay.module.scss';

const cx = classNames.bind(styles);

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = memo(({ className, onClick }: OverlayProps) => (
  <button type="button" aria-label="overlay" className={cx(styles.container, className)} onClick={onClick} />
));
