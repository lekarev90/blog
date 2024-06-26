import {
  memo, useCallback, useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/addCommentForm';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { Text as TextDeprecated } from '@/shared/ui/depricated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import { getArticleCommentsIsLoading } from '../../model/selectors/articleComments.selectors';
import { addArticleComment } from '../../model/services/addArticleCommet';
import { fetchCommentsByArticleId } from '../../model/services/fetchArticleCommets';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';

interface ArticleCommentsProps {
  id: string;
}

const reducers = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

export const ArticleComments = memo(({ id }: ArticleCommentsProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const isCommentsLoading = useSelector(getArticleCommentsIsLoading);

  const [commentText, setCommentText] = useState('');

  const onChangeComment = useCallback(() => {
    dispatch(
      addArticleComment({
        commentText,
        articleId: id,
      }),
    );
    dispatch(fetchCommentsByArticleId(id));

    setCommentText('');
  }, [commentText, dispatch, id]);

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack Component="section" gap="16">
        <ToggleFeatures
          feature="isOldDesign"
          on={<TextDeprecated title={t('articles:commentTitle')} />}
          off={<Text title={t('articles:commentTitle')} />}
        />
        <AddCommentForm text={commentText} onSendComment={onChangeComment} onChangeComment={setCommentText} />
        <CommentList isLoading={isCommentsLoading} comments={comments} />
      </VStack>
    </DynamicModuleLoader>
  );
});
