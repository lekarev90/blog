import {type FC, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {classNames} from 'shared/lib/classNames/classNames'
import {LangSwitcher} from 'shared/ui/LangSwitcher/LangSwitcher'
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import {Button} from "../../../../shared/ui/Button/Button";

import styles from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false)
    const {t} = useTranslation()

    const onToggle = (): void => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div data-testid="sidebar" className={classNames({
            className: styles.container,
            additional: [className],
            mods: {[styles.collapsed]: collapsed}
        })}>
            <Button data-testid="sidebar-toggle" onClick={onToggle}>{t('translation:hide')}</Button>
            <div className={styles.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    )
}
