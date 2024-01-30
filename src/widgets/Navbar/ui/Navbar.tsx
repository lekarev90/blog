import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onAuthModalToggle = useCallback(() => {
    setIsAuthModalOpen((prevState) => !prevState);
  }, []);

  return (
    <div className={classNames({ className: styles.container, additional: [className] })}>
      <div className={styles.links}>
        <Button
          variant={ButtonVariants.CLEAR_INVERTED}
          className={styles.links}
          onClick={onAuthModalToggle}
        >
          {t('translation:navbar.authModalButton')}
        </Button>
      </div>
      <Modal
        onClose={onAuthModalToggle}
        isOpen={isAuthModalOpen}
      >
        123
      </Modal>
    </div>
  );
};
