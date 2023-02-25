type Mods = Record<string, string | boolean>

interface classNamesProps {
    className: string
    mods?: Mods
    additional?: string[]
}
export const classNames = ({ className, mods = {}, additional = [] }: classNamesProps): string => {
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
}
