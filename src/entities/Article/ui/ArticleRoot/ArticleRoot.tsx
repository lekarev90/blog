import { ArticleDetails } from 'entities/Article/ui/ArticleDetails/ArticleDetails';
import { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import { Text, TextVariant } from 'shared/ui/Text/Text';

import { ArticleDetailsLoading } from '../ArticleDetailsLoading/ArticleDetailsLoading';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails.selectors';

import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

import styles from './ArticleRoot.module.scss';

interface ArticleDetailsProps {
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleRoot: FC<ArticleDetailsProps> = memo(({ id }) => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      {isLoading && <ArticleDetailsLoading />}
      {error && (
        <Text
          className={styles.error}
          text="ERROR"
          variant={TextVariant.ERROR}
        />
      ) }
      {!isLoading && !error && article && <ArticleDetails {...article} />}
    </DynamicModuleLoader>
  );
});
