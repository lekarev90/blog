import { FunctionComponent, memo, SVGProps } from 'react';
import classNames from 'classnames/bind';

import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import GridIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { EArticlesView } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';

import styles from './ArticlesListViewSwitcher.module.scss';

const cx = classNames.bind(styles);

interface IViewType {
  view: EArticlesView
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

interface IArticlesListViewSwitcherProps {
  onSwitchView: (view: EArticlesView) => void;
  currentArticleView: EArticlesView;
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

export const ArticlesListViewSwitcher = memo(({ onSwitchView, currentArticleView }: IArticlesListViewSwitcherProps) => (
  <HStack gap="8">
    {Object.values(viewTypes).map(({ view, icon }) => (
      <Button onClick={() => onSwitchView(view)} key={view}>
        <Icon Svg={icon} className={cx({ isActive: view === currentArticleView })} />
      </Button>
    ))}
  </HStack>
));
