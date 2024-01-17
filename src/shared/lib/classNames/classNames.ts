interface classNamesProps {
  className: string;
  mods?: Record<string, string | boolean>;
  additional?: string[];
}

export const classNames = ({ className, mods = {}, additional = [] }: classNamesProps): string => [
  className,
  ...additional,
  ...Object.entries(mods).reduce(
    (acc, [className, value]) => {
      if (value) {
        acc.push(className);
      }

      return acc;
    },
    [],
  ),
].join(' ');
