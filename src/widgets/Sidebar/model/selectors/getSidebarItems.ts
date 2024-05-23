import { createSelector } from 'reselect';
import { TFunction } from 'react-i18next';
import { getUserAuthData } from '@/entities/User';

import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';

import { ISidebarItem } from '../types/types';
import { RouterPath } from '@/shared/const/router';

export const getSidebarItems = (t: TFunction) => createSelector(getUserAuthData, ({ authData }) => {
  const items: ISidebarItem[] = [
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
  ];

  if (authData) {
    items.push(
      {
        path: `${RouterPath.profile}/${authData.id}`,
        Icon: ProfileIcon,
        text: t('translation:sidebar.menu.linkTitles.profile'),
        isAuthOnly: true,
      },
      {
        path: RouterPath.articles,
        Icon: ArticleIcon,
        text: t('translation:sidebar.menu.linkTitles.article'),
        isAuthOnly: true,
      },
    );
  }

  return items;
});
