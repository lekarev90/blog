import { FunctionComponent, SVGProps } from 'react';

import classNames from 'classnames/bind';

import styles from './Icon.module.scss';

const cx = classNames.bind(styles);

type TSvgProps = Omit<SVGProps<SVGSVGElement>, 'onClick'>

interface IIconBaseProps extends TSvgProps {
  className?: string;
  Svg: FunctionComponent<SVGProps<SVGSVGElement>>;
}

interface INonClickableIconProps extends IIconBaseProps {
  clickable?: false;
}

interface IClickableIconProps extends IIconBaseProps {
  clickable: true;
  onClick: () => void;
}

type TIconProps = IClickableIconProps | INonClickableIconProps

export const Icon = ({
  Svg, className, width = 32, height = 32, clickable, ...props
}: TIconProps) => {
  const icon = <Svg className={cx(styles.icon, className)} width={width} height={height} {...props} onClick={undefined} />;

  if (clickable) {
    const { onClick } = props as IClickableIconProps;

    return (
      <button className={styles.button} type="button" onClick={onClick} style={{ width, height }}>
        {icon}
      </button>
    );
  }

  return icon;
};
