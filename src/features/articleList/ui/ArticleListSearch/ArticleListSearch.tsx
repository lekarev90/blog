import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Input } from 'shared/ui/Input/Input';
import { Card } from 'shared/ui/Card/Card';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';

import { fetchArticlesList, articlesListActions } from 'widgets/articleList';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { useDebounce } from 'shared/lib/hooks/useDebounce';

import { articlesSearchActions, articlesSearchReducer } from '../../model/slices/articlesSearchSlice';

import styles from './ArticleListSearch.module.scss';

const reducers = {
  articlesSearch: articlesSearchReducer,
};

export const ArticleListSearch = memo(() => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();

  const onChangeSearchText = useDebounce(useCallback(
    (value) => {
      dispatch(articlesSearchActions.setSearch(value));
      dispatch(articlesListActions.setPage(1));
      dispatch(fetchArticlesList({ withSetAll: true }));
    },
    [dispatch],
  ), 1000);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Card className={styles.container}>
        <Input name="search" placeholder={t('articles:search.placeholder')} onChange={onChangeSearchText} />
      </Card>
    </DynamicModuleLoader>
  );
});
