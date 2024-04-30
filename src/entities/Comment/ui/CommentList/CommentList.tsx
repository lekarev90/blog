import { memo } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text/Text';

import { IComment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

import styles from './CommentList.module.scss';

const cx = classNames.bind(styles);

interface CommentListProps {
  className?: string;
  isLoading?: boolean;
  comments?: IComment[]
}

export const CommentList = memo(({ className, isLoading = false, comments = [] }: CommentListProps) => {
  const { t } = useTranslation('comments');

  return (
    <div className={cx(styles.container, className)}>
      {comments.length
        ? comments.map((comment) => (
          <CommentCard
            key={comment.id}
            isLoading={isLoading}
            className={styles.comment}
            {...comment}
          />
        ))
        : <Text text={t('comments:noComments')} />}
    </div>
  );
});
