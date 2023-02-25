import {useState} from "react";
import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib/classNames/classNames";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";

import styles from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const {t} = useTranslation()

    const onToggle = () => setCollapsed(prevState => !prevState)

    return (
        <div className={classNames({
            className: styles.container,
            additional: [className],
            mods: {[styles.collapsed]: collapsed}
        })}>
            <button onClick={onToggle}>{t('translation:hide')}</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
