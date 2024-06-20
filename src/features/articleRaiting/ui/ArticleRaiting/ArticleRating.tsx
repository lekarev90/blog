import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/depricated/Skeleton';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

import { useGetArticleRatingQuery, useRateArticleMutation } from '../../model/api/ratingArticle';

export interface ArticleRatingProps {
  articleId: string;
}

const ArticleRating = memo(({ articleId }: ArticleRatingProps) => {
  const { t } = useTranslation('articles');

  const { authData } = useSelector(getUserAuthData) || {};
  const { data, isLoading, isFetching } = useGetArticleRatingQuery({ articleId, userId: authData?.id || '' });
  const [rateArticleMutation] = useRateArticleMutation();

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    rateArticleMutation({
      userId: authData?.id || '',
      articleId,
      rate: starsCount,
      feedback,
    });
  }, [articleId, authData?.id, rateArticleMutation]);

  if (isLoading || isFetching) {
    return (
      <ToggleFeatures
        feature="isOldDesign"
        on={<SkeletonDeprecated width="100%" height={120} />}
        off={<Skeleton width="100%" height={120} borderRadius="12px" />}
      />
    );
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onAccept={handleRateArticle}
      onCancel={handleRateArticle}
      rate={rating?.rate}
      title={t('articles:rateArticle')}
      feedbackTitle={t('articles:rateArticleFeedback')}
      hasFeedback
    />
  );
});

export default ArticleRating;
