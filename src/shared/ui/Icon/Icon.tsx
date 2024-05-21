import { FunctionComponent, SVGProps } from 'react';
import classNames from 'classnames/bind';

import styles from './Icon.module.scss';

const cx = classNames.bind(styles);

interface IconProps {
  className?: string;
  Svg: FunctionComponent<SVGProps<SVGSVGElement>>;
  inverted?: boolean
}

export const Icon = ({ Svg, className, inverted = false }: IconProps) => (
  <Svg className={cx(styles.icon, className, { inverted })} />
);
