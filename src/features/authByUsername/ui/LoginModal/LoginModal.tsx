import { Suspense } from 'react';

import { Loader } from '@/shared/ui/depricated/Loader';
import { Modal } from '@/shared/ui/redesigned/Modal';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ onClose, isOpen }: LoginModalProps) => (
  <Modal
    lazy
    isOpen={isOpen}
    onClose={onClose}
  >
    <Suspense fallback={<Loader />}>
      <LoginFormAsync onSuccess={onClose} />
    </Suspense>
  </Modal>
);
