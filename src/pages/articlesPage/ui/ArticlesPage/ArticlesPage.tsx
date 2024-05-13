import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { Page } from 'shared/ui/Page/Page';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import {
  ArticlesList, fetchNextArticlesListPage, getArticlesListData, getArticles,
} from 'widgets/articleList';
import { ArticleListSearch, ArticlesListSort, ArticlesListViewSwitcher } from 'features/articleList';

import styles from './ArticlesPage.module.scss';

const ArticlesPage = memo(() => {
  const dispatch = useAppDispatch();
  const { isLoading } = useSelector(getArticlesListData) || {};

  const articles = useSelector(getArticles.selectAll);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesListPage());
  }, [dispatch]);

  return (
    <Page onScrollEnd={onLoadNextPart}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sortContainer}>
            <ArticlesListSort />
            <ArticlesListViewSwitcher />
          </div>
          <ArticleListSearch />
        </div>
        <ArticlesList articles={articles} isLoading={isLoading} />
      </div>
    </Page>
  );
});

export default ArticlesPage;
