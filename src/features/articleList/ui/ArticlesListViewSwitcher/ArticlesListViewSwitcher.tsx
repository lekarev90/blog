import {
  FunctionComponent, memo, SVGProps, useCallback,
} from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

import ListIcon from 'shared/assets/icons/list-24-24.svg';
import GridIcon from 'shared/assets/icons/tiled-24-24.svg';

import { EArticlesView } from 'entities/Article';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import { articlesListActions, getArticlesListData } from 'widgets/articleList';

import { HStack } from 'shared/ui/Stack';
import styles from './ArticlesListViewSwitcher.module.scss';

const cx = classNames.bind(styles);

interface IViewType {
  view: EArticlesView
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

const viewTypes: Record<EArticlesView, IViewType> = {
  [EArticlesView.GRID]: {
    view: EArticlesView.GRID,
    icon: GridIcon,
  },
  [EArticlesView.LIST]: {
    view: EArticlesView.LIST,
    icon: ListIcon,
  },
};

export const ArticlesListViewSwitcher = memo(() => {
  const dispatch = useAppDispatch();
  const { articlesView } = useSelector(getArticlesListData) || {};

  const onSwitchView = useCallback((view: EArticlesView) => {
    dispatch(articlesListActions.setArticlesView(view));
  }, [dispatch]);

  return (
    <HStack gap="8">
      {Object.values(viewTypes).map(({ view, icon }) => (
        <Button onClick={() => onSwitchView(view)} key={view}>
          <Icon Svg={icon} className={cx({ isActive: view === articlesView })} />
        </Button>
      ))}
    </HStack>
  );
});
