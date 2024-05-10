import { memo, useCallback, useLayoutEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';

import { EArticlesView, IArticle } from 'entities/Article';
import { articlesListReducer, fetchNextArticlesListPage } from 'widgets/articleList';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';

import { useInitSortAndSearchFromSearchParams } from '../../model/helpers/initSortAndSearchFromSearchParams';
import { articlesListActions, getArticles } from '../../model/slices/articlesListSlice';
import { getArticlesListData } from '../../model/selectors/articlesList.selectors';
import { ARTICLES_LIST_DATA } from '../../model/helpers/helpers';

import styles from './ArticleList.module.scss';

const cx = classNames.bind(styles);

interface ArticleListProps {
  className?: string;
  articles?: IArticle[];
  isLoading?: boolean;
}
const reducers = {
  articlesList: articlesListReducer,
};

export const ArticleList = memo(({
  className,
}: ArticleListProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const {
    isLoading, hasMore, articlesView = EArticlesView.LIST, quantityLimit = 9,
  } = useSelector(getArticlesListData) || {};
  const articles = useSelector(getArticles.selectAll);
  const isShowMoreButton = hasMore && ARTICLES_LIST_DATA[articlesView]?.HAS_MORE_BUTTON && !isLoading;

  const Component = ARTICLES_LIST_DATA[articlesView].COMPONENT;
  const ComponentSkeleton = ARTICLES_LIST_DATA[articlesView].COMPONENT_SKELETON;

  const skeletonComponents = Array.from({ length: quantityLimit }, (_, index) => <ComponentSkeleton key={index} />);

  const renderComponent = useCallback(
    () => articles.map((article, index) => <Component key={index} {...article} />),
    [Component, articles],
  );

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesListPage());
  }, [dispatch]);

  useLayoutEffect(() => {
    dispatch(articlesListActions.init());
  });

  useInitSortAndSearchFromSearchParams();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <div className={cx(className, { [`view-${articlesView}`]: articlesView })}>
        {renderComponent()}
        {isLoading && skeletonComponents}
        {isShowMoreButton && (
          <Card className={styles.fetchMore} onClick={onLoadNextPart}>
            <Text text={t('translation:loadMore')} />
          </Card>
        )}
      </div>
    </DynamicModuleLoader>
  );
});
