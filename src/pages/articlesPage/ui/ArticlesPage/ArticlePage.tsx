import React, { memo, useCallback } from 'react';

import { Page } from 'shared/ui/Page/Page';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import { ArticleList, fetchNextArticlesListPage } from 'widgets/articleList';
import { ArticleListSearch, ArticlesListSort, ArticlesListViewSwitcher } from 'features/articleList';

import styles from './ArticlePage.module.scss';

const ArticlePage = memo(() => {
  const dispatch = useAppDispatch();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesListPage());
  }, [dispatch]);

  return (
    <Page onScrollEnd={onLoadNextPart}>
      <div className={styles.container}>
        <div className={styles.header}>
          <ArticlesListSort />
          <ArticlesListViewSwitcher />
          <ArticleListSearch />
        </div>
        <ArticleList />
      </div>
    </Page>
  );
});

export default ArticlePage;
