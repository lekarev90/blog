import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg'
import LightThemeIcon from 'shared/assets/icons/theme-light.svg'
import { Button, ButtonVariants } from 'shared/ui/Button/Button'

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button onClick={toggleTheme} variant={ButtonVariants.CLEAR}>
            {theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon/>}
        </Button>
    )
}
