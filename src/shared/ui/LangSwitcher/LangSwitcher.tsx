import {useTranslation} from "react-i18next";
import {Button, ButtonVariants} from "shared/ui/Button/Button";

import styles from './LangSwitcher.module.scss'

export const LangSwitcher = () => {
    const {t, i18n} = useTranslation()

    const onToggleLang = () => {
        const isRu = i18n.language === 'ru';

        i18n.changeLanguage(isRu ? 'en' : 'ru')
    }
    return (
        <Button variant={ButtonVariants.CLEAR}
                onClick={onToggleLang}
                className={styles.button}
        >
            {t('translation:switchLanguage')}
        </Button>
    );
};
