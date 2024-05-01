import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';

import styles from './AddCommentForm.module.scss';

const cx = classNames.bind(styles);

interface AddCommentFormProps {
  className?: string;
  text?: string
  onSendComment: () => void
  onChangeComment: (text: string) => void
}

export const AddCommentForm = ({
  className, text = '', onChangeComment, onSendComment,
}: AddCommentFormProps) => {
  const { t } = useTranslation('comments');

  return (
    <div className={cx(styles.container, className)}>
      <Input
        name="comment"
        placeholder={t('comments:addComment')}
        value={text}
        onChange={onChangeComment}
        className={styles.input}
      />
      <Button
        className={styles.button}
        variant={ButtonVariants.OUTLINE}
        onClick={onSendComment}
        disabled={!text}
      >
        {t('comments:sendComment')}
      </Button>
    </div>
  );
};
