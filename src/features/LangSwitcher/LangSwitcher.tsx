import { type FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

import { Button as ButtonDeprecated, ButtonVariants } from '../../shared/ui/depricated/Button';

import styles from './LangSwitcher.module.scss';

export const LangSwitcher: FC = memo(() => {
  const { t, i18n } = useTranslation();

  const onToggleLang = async (): Promise<void> => {
    const isRu = i18n.language === 'ru';

    await i18n.changeLanguage(isRu ? 'en' : 'ru');
  };

  return (
    <ToggleFeatures
      feature="isOldDesign"
      on={(
        <ButtonDeprecated
          variant={ButtonVariants.CLEAR}
          onClick={onToggleLang}
          className={styles.button}
        >
          {t('translation:switchLanguage')}
        </ButtonDeprecated>
)}
      off={(
        <Button
          variant="clear"
          onClick={onToggleLang}
        >
          {t('translation:switchLanguage')}
        </Button>
)}
    />
  );
});
