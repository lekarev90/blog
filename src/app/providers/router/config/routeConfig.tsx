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
import { EAppRoutes, RouterPath } from '@/shared/const/router';

export type TAppRouterProps = RouteProps & {
  isAuthOnly?: boolean;
  roles?: ERoles[];
};

export const routeConfig: Record<EAppRoutes, TAppRouterProps> = {
  [EAppRoutes.MAIN]: {
    path: RouterPath.main,
    element: <MainPage />,
  },
  [EAppRoutes.ABOUT]: {
    path: RouterPath.about,
    element: <AboutPage />,
  },
  [EAppRoutes.PROFILE]: {
    path: `${RouterPath.profile}/:id`,
    element: <ProfilePage />,
    isAuthOnly: true,
  },
  [EAppRoutes.ARTICLES]: {
    path: RouterPath.articles,
    element: <ArticlePage />,
    isAuthOnly: true,
  },
  [EAppRoutes.ARTICLE_DETAILS]: {
    path: `${RouterPath.article_details}:id`,
    element: <ArticleDetailsPage />,
    isAuthOnly: true,
  },
  [EAppRoutes.ARTICLE_CREATE]: {
    path: `${RouterPath.article_create}`,
    element: <ArticleEditPage />,
    isAuthOnly: true,
  },
  [EAppRoutes.ARTICLE_EDIT]: {
    path: `${RouterPath.article_edit}`,
    element: <ArticleEditPage />,
    isAuthOnly: true,
  },
  [EAppRoutes.ADMIN_PANEL]: {
    path: `${RouterPath.admin_panel}`,
    element: <AdminPanelPage />,
    isAuthOnly: true,
    roles: [ERoles.MANAGER, ERoles.ADMIN],
  },
  [EAppRoutes.ACCESS_DENIED]: {
    path: `${RouterPath.access_denied}`,
    element: <AccessDeniedPage />,
  },
  [EAppRoutes.NOT_FOUND]: {
    path: RouterPath['404'],
    element: <NotFoundPage />,
  },
};
