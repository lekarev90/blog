import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useGetArticleRatingQuery, useRateArticleMutation } from '@/features/articleRaiting/model/api/ratingArticle';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
  articleId: string;
}

const ArticleRating = memo(({ articleId }: ArticleRatingProps) => {
  const { t } = useTranslation('articles');

  const { authData } = useSelector(getUserAuthData) || {};
  const { data, isLoading } = useGetArticleRatingQuery({ articleId, userId: authData?.id || '' });
  const [rateArticleMutation] = useRateArticleMutation();

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    rateArticleMutation({
      userId: authData?.id || '',
      articleId,
      rate: starsCount,
      feedback,
    });
  }, [articleId, authData?.id, rateArticleMutation]);

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
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
