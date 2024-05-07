import { memo, useCallback } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { ARTICLES_LIST_DATA } from '../../model/const/const';
import { getArticlesListHasMore, getArticlesListIsLoading } from '../../model/selectors/articlesList.selectors';
import { ArticleListItemViewSwitcher } from './ui/ArticleListItemViewSwitcher/ArticleListItemViewSwitcher';
import { EArticleView, IArticle } from '../../model/types/article';
import { getArticles } from '../../model/slice/articlesListSlice';

import styles from './ArticleList.module.scss';

const cx = classNames.bind(styles);

interface ArticleListProps {
  className?: string;
  articles?: IArticle[];
  isLoading?: boolean;
  onLoadNextPart: () => void;
  onSwitchArticleView: (view: EArticleView) => void;
  articleView: EArticleView;
}

export const ArticleList = memo(({
  className, onLoadNextPart, onSwitchArticleView, articleView,
}: ArticleListProps) => {
  const { t } = useTranslation();

  const isLoading = useSelector(getArticlesListIsLoading);
  const articles = useSelector(getArticles.selectAll);
  const isShowMoreButton = useSelector(getArticlesListHasMore) && ARTICLES_LIST_DATA[articleView].HAS_MORE_BUTTON && !isLoading;

  const Component = ARTICLES_LIST_DATA[articleView].COMPONENT;
  const ComponentSkeleton = ARTICLES_LIST_DATA[articleView].COMPONENT_SKELETON;
  const skeletonQuantity = ARTICLES_LIST_DATA[articleView].SKELETON_QUANTITY;

  const skeletonComponents = Array.from({ length: skeletonQuantity }, (_, index) => <ComponentSkeleton key={index} />);

  const renderComponent = useCallback(
    () => articles.map((article, index) => <Component key={index} {...article} />),
    [Component, articles],
  );

  return (
    <>
      <ArticleListItemViewSwitcher currentView={articleView} onSwitchView={onSwitchArticleView} />
      <div className={cx(className, { [`view-${articleView}`]: articleView })}>
        {renderComponent()}
        {isLoading && skeletonComponents}
        {isShowMoreButton && (
          <Card className={styles.fetchMore} onClick={onLoadNextPart}>
            <Text text={t('translation:loadMore')} />
          </Card>
        )}
      </div>
    </>
  );
});
