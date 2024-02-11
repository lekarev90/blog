import { FC, useCallback, useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { LoginModal } from 'features/AuthByUsername';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';

import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onCloseAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const onOpenAuthModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.links}>
        <Button
          variant={ButtonVariants.CLEAR_INVERTED}
          className={styles.links}
          onClick={onOpenAuthModal}
        >
          {t('translation:navbar.authModalButton')}
        </Button>
      </div>
      <LoginModal
        onClose={onCloseAuthModal}
        isOpen={isAuthModalOpen}
      />
    </div>
  );
};
