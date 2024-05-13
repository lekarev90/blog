import { memo } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text/Text';

import { IComment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

import { CommentCardSkeleton } from '../CommentCardSkeleton/CommentCardSkeleton';

import styles from './CommentList.module.scss';

const cx = classNames.bind(styles);

interface CommentListProps {
  className?: string;
  isLoading?: boolean;
  comments?: IComment[]
}

export const CommentList = memo(({ className, isLoading = false, comments = [] }: CommentListProps) => {
  const { t } = useTranslation('comments');

  const skeletons = Array.from({ length: 3 }, (_, index) => <CommentCardSkeleton key={index} />);
  const isContentReady = !isLoading && comments.length;

  return (
    <div className={cx(styles.container, className)}>
      {isLoading && skeletons}
      {isContentReady
        ? comments.map((comment) => (
          <CommentCard
            key={comment.id}
            className={cx(styles.comment, { isLoading })}
            {...comment}
          />
        ))
        : <Text text={t('comments:noComments')} />}
    </div>
  );
});
