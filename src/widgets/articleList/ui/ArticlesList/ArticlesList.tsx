import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { EArticlesView, IArticle } from '@/entities/Article';
import { articlesSortReducer } from '@/features/articleList';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { Card as CardDeprecated } from '@/shared/ui/depricated/Card';
import { Text as TextDeprecated } from '@/shared/ui/depricated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack, TFlexGap, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import { articlesSearchReducer } from '../../../../features/articleList/model/slices/articlesSearchSlice';
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
  articlesSearch: articlesSearchReducer,
  articlesSort: articlesSortReducer,
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
  const stackProps: Record<string, TFlexGap> = { gap: '16' };

  const skeletonComponents = Array.from({ length: QUANTITY_LIMIT }, (_, index) => <ComponentSkeleton key={index} />);

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
            Component={toggleFeatures({
              name: 'isOldDesign',
              on: () => CardDeprecated,
              off: () => Card,
            })}
            className={styles.fetchMore}
            align="center"
            justify="center"
            maxWidth
            onClick={onLoadNextPart}
          >
            <ToggleFeatures
              feature="isOldDesign"
              on={<TextDeprecated text={t('translation:loadMore')} />}
              off={<Text text={t('translation:loadMore')} />}
            />
          </StackComponent>
        )}
      </StackComponent>
    </DynamicModuleLoader>
  );
});
