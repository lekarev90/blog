type Mods = Record<string, string | boolean>;


export const classNames = (className: string, mods: Mods, additional: string[]) => {
    return [
        className,
        ...additional,
        ...Object.entries(mods)
            .reduce((acc, [className, value]) => {
                if (value) {
                    acc.push(className)
                }
                return acc
            }, [])
    ].join(' ')
};
