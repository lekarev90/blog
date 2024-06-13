import { TFunction } from 'react-i18next';
import { createSelector } from 'reselect';

import { getUserAuthData } from '@/entities/User';
import AboutIconDeprecated from '@/shared/assets/icons/about-20-20.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/article-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/Info.svg';
import MainIconDeprecated from '@/shared/assets/icons/main-20-20.svg';
import ProfileIconDeprecate from '@/shared/assets/icons/profile-20-20.svg';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';

import { ISidebarItem } from '../types/types';

export const getSidebarItems = (t: TFunction) => createSelector(getUserAuthData, ({ authData }) => {
  const items: ISidebarItem[] = [
    {
      path: getRouteMain(),
      Icon: toggleFeatures({
        name: 'isOldDesign',
        on: () => MainIconDeprecated,
        off: () => MainIcon,
      }),
      text: t('translation:sidebar.menu.linkTitles.main'),
    },
    {
      path: getRouteAbout(),
      Icon: toggleFeatures({
        name: 'isOldDesign',
        on: () => AboutIconDeprecated,
        off: () => AboutIcon,
      }),
      text: t('translation:sidebar.menu.linkTitles.about'),
    },
  ];

  if (authData) {
    items.push(
      {
        path: getRouteProfile(authData.id),
        Icon: toggleFeatures({
          name: 'isOldDesign',
          on: () => ProfileIconDeprecate,
          off: () => ProfileIcon,
        }),
        text: t('translation:sidebar.menu.linkTitles.profile'),
        isAuthOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: toggleFeatures({
          name: 'isOldDesign',
          on: () => ArticleIconDeprecated,
          off: () => ArticleIcon,
        }),
        text: t('translation:sidebar.menu.linkTitles.article'),
        isAuthOnly: true,
      },
    );
  }

  return items;
});
