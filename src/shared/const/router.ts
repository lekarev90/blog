export enum EAppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  ACCESS_DENIED = 'access_denied',

  NOT_FOUND = '404',
}

export const RouterPath: Record<EAppRoutes, string> = {
  [EAppRoutes.MAIN]: '/',
  [EAppRoutes.ABOUT]: '/about',
  [EAppRoutes.PROFILE]: '/profile', // + :id
  [EAppRoutes.ARTICLES]: '/articles',
  [EAppRoutes.ARTICLE_DETAILS]: '/articles/', // + id
  [EAppRoutes.ARTICLE_CREATE]: '/articles/new',
  [EAppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  [EAppRoutes.ADMIN_PANEL]: '/admin',
  [EAppRoutes.ACCESS_DENIED]: '/forbidden',
  [EAppRoutes.NOT_FOUND]: '*',
};
