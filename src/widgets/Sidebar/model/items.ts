import { FC, SVGProps } from 'react';

import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import i18n from 'shared/config/i18n/i18n';

import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';

export interface ISidebarItem {
  path: string;
  text: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
}

export const getSidebarItemsList: () => ISidebarItem[] = () => [
  {
    path: RouterPath.main,
    Icon: MainIcon,
    text: i18n.t('translation:sidebar.menu.linkTitles.main'),
  },
  {
    path: RouterPath.about,
    Icon: AboutIcon,
    text: i18n.t('translation:sidebar.menu.linkTitles.about'),
  },
  {
    path: RouterPath.profile,
    Icon: ProfileIcon,
    text: i18n.t('translation:sidebar.menu.linkTitles.profile'),
  },
];
