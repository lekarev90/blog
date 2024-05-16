import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text/Text';

import { VStack } from 'shared/ui/Stack';
import { IComment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

import { CommentCardSkeleton } from '../CommentCardSkeleton/CommentCardSkeleton';

import styles from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  isLoading?: boolean;
  comments?: IComment[];
}

export const CommentList = memo(({ isLoading = false, comments = [] }: CommentListProps) => {
  const { t } = useTranslation('comments');

  const skeletons = Array.from({ length: 3 }, (_, index) => <CommentCardSkeleton key={index} />);
  const isContentReady = !isLoading && comments.length;

  return (
    <VStack gap="8">
      {isLoading && skeletons}
      {isContentReady
        ? comments.map((comment) => (
          <CommentCard
            key={comment.id}
            className={styles.comment}
            {...comment}
          />
        ))
        : <Text text={t('comments:noComments')} />}
    </VStack>
  );
});
