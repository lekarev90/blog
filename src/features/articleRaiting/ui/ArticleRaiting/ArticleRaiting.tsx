import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';

import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useGetArticleRatingQuery } from '@/features/articleRaiting/model/api/ratingArticle';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface ArticleRatingProps {
  articleId: string;
}

export const ArticleRating = memo(({ articleId }: ArticleRatingProps) => {
  const { t } = useTranslation('articles');

  const { authData } = useSelector(getUserAuthData) || {};
  const { data, isLoading } = useGetArticleRatingQuery({ articleId, userId: authData?.id || '' });

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      rate={rating?.rate}
      title={t('articles:rateArticle')}
      feedbackTitle={t('articles:rateArticleFeedback')}
      hasFeedback
    />
  );
});
