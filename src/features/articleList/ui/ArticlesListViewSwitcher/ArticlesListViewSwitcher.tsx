import { FunctionComponent, memo, SVGProps } from 'react';

import classNames from 'classnames/bind';

import { EArticlesView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/burger.svg';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import GridIcon from '@/shared/assets/icons/tile.svg';
import GridIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated } from '@/shared/ui/depricated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/depricated/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack } from '@/shared/ui/redesigned/Stack';

import styles from './ArticlesListViewSwitcher.module.scss';

const cx = classNames.bind(styles);

interface IViewType {
  view: EArticlesView;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

interface IArticlesListViewSwitcherProps {
  onSwitchView: (view: EArticlesView) => void;
  currentArticleView: EArticlesView;
}

const viewTypes: Record<EArticlesView, IViewType> = {
  [EArticlesView.GRID]: {
    view: EArticlesView.GRID,
    icon: toggleFeatures({
      name: 'isOldDesign',
      on: () => GridIconDeprecated,
      off: () => GridIcon,
    }),
  },
  [EArticlesView.LIST]: {
    view: EArticlesView.LIST,
    icon: toggleFeatures({
      name: 'isOldDesign',
      on: () => ListIconDeprecated,
      off: () => ListIcon,
    }),
  },
};

export const ArticlesListViewSwitcher = memo(({ onSwitchView, currentArticleView }: IArticlesListViewSwitcherProps) => (
  <ToggleFeatures
    feature="isOldDesign"
    on={(
      <HStack gap="8">
        {Object.values(viewTypes).map(({ view, icon }) => (
          <ButtonDeprecated onClick={() => onSwitchView(view)} key={view}>
            <IconDeprecated Svg={icon} width={24} height={24} inverted className={cx({ isActive: view === currentArticleView })} />
          </ButtonDeprecated>
        ))}
      </HStack>
    )}
    off={(
      <HStack Component={Card} maxWidth flexWrap={false} borderRadius="rounded" variant="light">
        {Object.values(viewTypes).map(({ view, icon }) => (
          <Icon
            clickable
            onClick={() => onSwitchView(view)}
            key={view}
            Svg={icon}
            className={cx({ isInactive: view !== currentArticleView })}
          />
        ))}
      </HStack>
    )}
  />
));
