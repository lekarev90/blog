declare module '*.scss' {
  type IClassNames = Record<string, string>

  const classnames: IClassNames;
  export = classnames
}

declare module '*.png';
declare module '*.jpg';

declare module '*.svg' {
  import { SVGProps } from 'react';

  const SVG: SVGProps<SVGSVGElement>;
  // @ts-ignore
  export default SVG;
}

// eslint-disable-next-line no-underscore-dangle,no-unused-vars
declare const __IS_DEV__: boolean;
// eslint-disable-next-line no-underscore-dangle,no-unused-vars
declare const __API__: string;

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T
}
