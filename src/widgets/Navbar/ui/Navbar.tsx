import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkColor} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";

import styles from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}
export const Navbar = ({className}: NavbarProps) => {
    return (
     <div className={classNames({className: styles.container, additional: [className]})}>
         <ThemeSwitcher />
         <div className={styles.links}>
             <AppLink color={AppLinkColor.SECONDARY} to={'/'}>Главная</AppLink>
             <AppLink color={AppLinkColor.SECONDARY} to={'/about'}>О сайте</AppLink>
         </div>
     </div>
    );
};
