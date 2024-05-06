import { FunctionComponent, memo, SVGProps } from 'react';
import classNames from 'classnames/bind';

import { Button } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';

import ListIcon from 'shared/assets/icons/list-24-24.svg';
import GridIcon from 'shared/assets/icons/tiled-24-24.svg';

import { EArticleView } from '../../../../model/types/article';

import styles from './ArticleListItemViewSwitcher.module.scss';

const cx = classNames.bind(styles);

interface ArticleListItemViewSwitcherProps {
  onSwitchView: (view: EArticleView) => void;
  currentView: EArticleView;
}

interface IViewType {
  view: EArticleView
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

const viewTypes: Record<EArticleView, IViewType> = {
  [EArticleView.LIST]: {
    view: EArticleView.LIST,
    icon: ListIcon,
  },
  [EArticleView.GRID]: {
    view: EArticleView.GRID,
    icon: GridIcon,
  },
};

export const ArticleListItemViewSwitcher = memo(({ onSwitchView, currentView }: ArticleListItemViewSwitcherProps) => (
  <div className={styles.viewSwitcher}>
    {Object.values(viewTypes).map(({ view, icon }) => (
      <Button onClick={() => onSwitchView(view)} key={view}>
        <Icon Svg={icon} className={cx({ isActive: view === currentView })} />
      </Button>
    ))}
  </div>
));
