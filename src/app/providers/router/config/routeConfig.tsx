import { RouteProps } from 'react-router-dom';
import { ArticleDetailsPage } from '@/pages/articleDetails';
import { ArticlePage } from '@/pages/articlesPage';
import { ProfilePage } from '@/pages/ProfilePage';

import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ArticleEditPage } from '@/pages/articleEdit';
import { AdminPanelPage } from '@/pages/adminPanel';
import { AccessDeniedPage } from '@/pages/accessDenied';
import { ERoles } from '@/entities/User';
import {
  EAppRoutes,
  getRouteForbidden,
  getRouteArticleCreate,
  getRouteMain,
  getRouteAbout,
  getRouteProfile,
  getRouteArticles,
  getRouteArticleDetails,
  getRouteArticleEdit,
  getRouteAdmin,
} from '@/shared/const/router';

export type TAppRouterProps = RouteProps & {
  isAuthOnly?: boolean;
  roles?: ERoles[];
};

export const routeConfig: Record<EAppRoutes, TAppRouterProps> = {
  [EAppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [EAppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  [EAppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    isAuthOnly: true,
  },
  [EAppRoutes.ARTICLES]: {
    path: getRouteArticles(),
    element: <ArticlePage />,
    isAuthOnly: true,
  },
  [EAppRoutes.ARTICLE_DETAILS]: {
    path: getRouteArticleDetails(':id'),
    element: <ArticleDetailsPage />,
    isAuthOnly: true,
  },
  [EAppRoutes.ARTICLE_CREATE]: {
    path: getRouteArticleCreate(),
    element: <ArticleEditPage />,
    isAuthOnly: true,
  },
  [EAppRoutes.ARTICLE_EDIT]: {
    path: getRouteArticleEdit(':id'),
    element: <ArticleEditPage />,
    isAuthOnly: true,
  },
  [EAppRoutes.ADMIN_PANEL]: {
    path: getRouteAdmin(),
    element: <AdminPanelPage />,
    isAuthOnly: true,
    roles: [ERoles.MANAGER, ERoles.ADMIN],
  },
  [EAppRoutes.ACCESS_DENIED]: {
    path: getRouteForbidden(),
    element: <AccessDeniedPage />,
  },
  [EAppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
