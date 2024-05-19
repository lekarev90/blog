import { ArticleDetailsPage } from 'pages/articleDetails';
import { ArticlePage } from 'pages/articlesPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ArticleEditPage } from 'pages/articleEdit';
import { AdminPanelPage } from 'pages/adminPanel';
import { ERoles } from 'entities/User/model/types/userSchema';
import { AccessDeniedPage } from 'pages/accessDenied';

export type AppRouterProps = RouteProps & {
  isAuthOnly?: boolean;
  roles?: ERoles[];
};

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  ACCESS_DENIED = 'access_denied',

  NOT_FOUND = '404'
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile', // + :id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + id
  [AppRoutes.ARTICLE_CREATE]: '/articles/new',
  [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  [AppRoutes.ADMIN_PANEL]: '/admin',
  [AppRoutes.ACCESS_DENIED]: '/forbidden',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouterProps> = {
  [AppRoutes.MAIN]: {
    path: RouterPath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RouterPath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RouterPath.profile}/:id`,
    element: <ProfilePage />,
    isAuthOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RouterPath.articles,
    element: <ArticlePage />,
    isAuthOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RouterPath.article_details}:id`,
    element: <ArticleDetailsPage />,
    isAuthOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: `${RouterPath.article_create}`,
    element: <ArticleEditPage />,
    isAuthOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: `${RouterPath.article_edit}`,
    element: <ArticleEditPage />,
    isAuthOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: `${RouterPath.admin_panel}`,
    element: <AdminPanelPage />,
    isAuthOnly: true,
    roles: [ERoles.MANAGER, ERoles.ADMIN],
  },
  [AppRoutes.ACCESS_DENIED]: {
    path: `${RouterPath.access_denied}`,
    element: <AccessDeniedPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RouterPath['404'],
    element: <NotFoundPage />,
  },
};
