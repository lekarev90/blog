import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/depricated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import { IComment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { CommentCardSkeleton } from '../CommentCardSkeleton/CommentCardSkeleton';

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
    <VStack gap="16">
      {isLoading && skeletons}
      {isContentReady ? (
        comments.map((comment) => <CommentCard key={comment.id} {...comment} />)
      ) : (
        <ToggleFeatures
          feature="isOldDesign"
          on={<TextDeprecated text={t('comments:noComments')} />}
          off={<Text text={t('comments:noComments')} />}
        />
      )}
    </VStack>
  );
});
