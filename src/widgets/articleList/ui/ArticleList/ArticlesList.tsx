import { memo, useCallback, useLayoutEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';

import { EArticlesView, IArticle } from 'entities/Article';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';

import { useInitSortAndSearchFromSearchParams } from '../../model/helpers/useInitSortAndSearchFromSearchParams';
import { fetchNextArticlesListPage } from '../../model/services/fetchNextArticlesListPage';
import { articlesListActions, articlesListReducer } from '../../model/slices/articlesListSlice';
import { getArticlesListData } from '../../model/selectors/articlesList.selectors';
import { ARTICLES_LIST_DATA } from '../../model/helpers/helpers';

import styles from './ArticlesList.module.scss';

const cx = classNames.bind(styles);

interface ArticleListProps {
  className?: string;
  articles: IArticle[];
  isLoading?: boolean;
  withMoreButton?: boolean;
}

const reducers = {
  articlesList: articlesListReducer,
};

export const ArticlesList = memo(({
  className, isLoading, withMoreButton, articles,
}: ArticleListProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const {
    hasMore, articlesView = EArticlesView.LIST, quantityLimit = 9,
  } = useSelector(getArticlesListData) || {};

  const isShowMoreButton = withMoreButton && hasMore && ARTICLES_LIST_DATA[articlesView]?.HAS_MORE_BUTTON && !isLoading;

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
