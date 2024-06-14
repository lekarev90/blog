import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { EArticlesView, IArticle } from '@/entities/Article';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { Card } from '@/shared/ui/depricated/Card';
import { Text } from '@/shared/ui/depricated/Text';
import { HStack, TFlexGap, VStack } from '@/shared/ui/redesigned/Stack';

import { ARTICLES_LIST_DATA, QUANTITY_LIMIT } from '../../model/const/const';
import { useInitSortAndSearchFromSearchParams } from '../../model/helpers/useInitSortAndSearchFromSearchParams';
import { getArticlesListData } from '../../model/selectors/articlesList.selectors';
import { fetchNextArticlesListPage } from '../../model/services/fetchNextArticlesListPage';
import { articlesListReducer } from '../../model/slices/articlesListSlice';

import styles from './ArticlesList.module.scss';

interface IArticleListProps {
  className?: string;
  articles?: IArticle[];
  isLoading?: boolean;
  withMoreButton?: boolean;
  articlesView: EArticlesView;
}

const reducers = {
  articlesList: articlesListReducer,
};

export const ArticlesList = memo(({
  isLoading, withMoreButton, articles = [], articlesView,
}: IArticleListProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { hasMore } = useSelector(getArticlesListData) || {};

  const isShowMoreButton = withMoreButton && hasMore && ARTICLES_LIST_DATA[articlesView].HAS_MORE_BUTTON && !isLoading;
  const isListView = articlesView === EArticlesView.LIST;

  const Component = ARTICLES_LIST_DATA[articlesView].COMPONENT;
  const ComponentSkeleton = ARTICLES_LIST_DATA[articlesView].COMPONENT_SKELETON;

  const StackComponent = isListView ? VStack : HStack;
  const stackProps: Record<string, TFlexGap> = isListView ? { gap: '16' } : { gap: '8' };

  const skeletonComponents = Array.from({ length: QUANTITY_LIMIT }, (_, index) => (
    <ComponentSkeleton key={index} />
  ));

  const renderComponent = useCallback(
    () => articles.map((article, index) => <Component key={index} {...article} />),
    [Component, articles],
  );

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesListPage());
  }, [dispatch]);

  useInitSortAndSearchFromSearchParams();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <StackComponent align="stretch" data-testid="ArticlesList" {...stackProps}>
        {Boolean(articles?.length) && renderComponent()}
        {isLoading && skeletonComponents}
        {isShowMoreButton && (
          <StackComponent
            Component={Card}
            className={styles.fetchMore}
            align="center"
            justify="center"
            maxWidth
            onClick={onLoadNextPart}
          >
            <Text text={t('translation:loadMore')} />
          </StackComponent>
        )}
      </StackComponent>
    </DynamicModuleLoader>
  );
});
