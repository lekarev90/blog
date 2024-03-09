import { FC, SVGProps } from 'react';
import { TFunction } from 'react-i18next';

import { RouterPath } from 'shared/config/routeConfig/routeConfig';

import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface ISidebarItem {
  path: string;
  text: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  isAuthOnly?: boolean;
}

export const getSidebarItemsList: (t: TFunction) => ISidebarItem[] = (t) => [
  {
    path: RouterPath.main,
    Icon: MainIcon,
    text: t('translation:sidebar.menu.linkTitles.main'),
  },
  {
    path: RouterPath.about,
    Icon: AboutIcon,
    text: t('translation:sidebar.menu.linkTitles.about'),
  },
  {
    path: RouterPath.profile,
    Icon: ProfileIcon,
    text: t('translation:sidebar.menu.linkTitles.profile'),
    isAuthOnly: true,
  },
];
