import { FormEvent, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated, ButtonVariants } from '@/shared/ui/depricated/Button';
import { Input as InputDeprecated } from '@/shared/ui/depricated/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';

import styles from './AddCommentForm.module.scss';

interface AddCommentFormProps {
  text?: string;
  onSendComment: () => void;
  onChangeComment: (text: string) => void;
}

export const AddCommentForm = ({ text = '', onChangeComment, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation('comments');

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSendComment();
  }, [onSendComment]);

  return (
    <form onSubmit={handleSubmit}>
      <HStack gap="32" maxWidth align="stretch" data-testid="AddCommentForm">
        <ToggleFeatures
          feature="isOldDesign"
          on={(
            <>
              <InputDeprecated
                name="comment"
                placeholder={t('comments:addComment')}
                value={text}
                onChange={onChangeComment}
                className={styles.input}
                data-testid="AddCommentForm.Input"
              />
              <ButtonDeprecated
                className={styles.button}
                variant={ButtonVariants.OUTLINE}
                disabled={!text}
                data-testid="AddCommentForm.Button"
                type="submit"
              >
                {t('comments:sendComment')}
              </ButtonDeprecated>
            </>
          )}
          off={(
            <>
              <Input
                name="comment"
                placeholder={t('comments:addComment')}
                value={text}
                onChange={onChangeComment}
                inputClassName={styles.input}
                data-testid="AddCommentForm.Input"
                disableLabelArea
              />
              <Button
                className={styles.button}
                variant="outline"
                disabled={!text}
                data-testid="AddCommentForm.Button"
                type="submit"
              >
                {t('comments:sendComment')}
              </Button>
            </>
          )}
        />
      </HStack>
    </form>
  );
};
