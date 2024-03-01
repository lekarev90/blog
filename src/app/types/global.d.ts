declare module '*.scss' {
  type IClassNames = Record<string, string>

  const classnames: IClassNames;
  export = classnames
}

declare module '*.png';
declare module '*.jpg';

declare module '*.svg' {
  import type React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

// eslint-disable-next-line no-underscore-dangle,no-unused-vars
declare const __IS_DEV__: boolean;
// eslint-disable-next-line no-underscore-dangle,no-unused-vars
declare const __API__: string;
