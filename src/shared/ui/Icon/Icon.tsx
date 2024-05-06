import { FunctionComponent, SVGProps } from 'react';
import classNames from 'classnames/bind';

import styles from './Icon.module.scss';

const cx = classNames.bind(styles);

interface IconProps {
  className?: string;
  Svg: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export const Icon = ({ Svg, className }: IconProps) => (
  <Svg className={cx(styles.icon, className)} />
);
