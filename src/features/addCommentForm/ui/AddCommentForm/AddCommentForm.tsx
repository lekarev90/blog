import { useTranslation } from 'react-i18next';

import { Button, ButtonVariants } from '@/shared/ui/depricated/Button';
import { Input } from '@/shared/ui/depricated/Input';
import { HStack } from '@/shared/ui/depricated/Stack';

import styles from './AddCommentForm.module.scss';

interface AddCommentFormProps {
  text?: string;
  onSendComment: () => void;
  onChangeComment: (text: string) => void;
}

export const AddCommentForm = ({ text = '', onChangeComment, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation('comments');

  return (
    <HStack gap="32" maxWidth align="stretch" data-testid="AddCommentForm">
      <Input
        name="comment"
        placeholder={t('comments:addComment')}
        value={text}
        onChange={onChangeComment}
        className={styles.input}
        data-testid="AddCommentForm.Input"
      />
      <Button
        className={styles.button}
        variant={ButtonVariants.OUTLINE}
        onClick={onSendComment}
        disabled={!text}
        data-testid="AddCommentForm.Button"
      >
        {t('comments:sendComment')}
      </Button>
    </HStack>
  );
};
