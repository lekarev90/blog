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

export const getRouteAbout = () => '/about';
export const getRouteMain = () => '/';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPattern: Record<string, EAppRoutes> = {
  [getRouteAbout()]: EAppRoutes.MAIN,
  [getRouteMain()]: EAppRoutes.ABOUT,
  [getRouteProfile('id')]: EAppRoutes.PROFILE,
  [getRouteArticles()]: EAppRoutes.ARTICLES,
  [getRouteArticleDetails('id')]: EAppRoutes.ARTICLE_DETAILS,
  [getRouteArticleCreate()]: EAppRoutes.ARTICLE_CREATE,
  [getRouteArticleEdit('id')]: EAppRoutes.ARTICLE_EDIT,
  [getRouteAdmin()]: EAppRoutes.ADMIN_PANEL,
  [getRouteForbidden()]: EAppRoutes.ACCESS_DENIED,
};
