import {
  memo, useCallback, useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Text } from '@/shared/ui/Text/Text';
import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/AddCommentForm';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from '@/shared/ui/Stack';

import { addArticleComment } from '../../model/services/addArticleCommet';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/articleComments.selectors';
import { fetchCommentsByArticleId } from '../../model/services/fetchArticleCommets';

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
    dispatch(addArticleComment({ commentText, articleId: id }));
    dispatch(fetchCommentsByArticleId(id));

    setCommentText('');
  }, [commentText, dispatch, id]);

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack Component="section" gap="16">
        <Text title={t('articles:commentTitle')} />
        <AddCommentForm text={commentText} onSendComment={onChangeComment} onChangeComment={setCommentText} />
        <CommentList isLoading={isCommentsLoading} comments={comments} />
      </VStack>
    </DynamicModuleLoader>
  );
});
