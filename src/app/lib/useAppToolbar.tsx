import { ReactElement } from 'react';

import { EAppRoutes } from '@/shared/const/router';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';
import { ScrollToolbar } from '@/widgets/scrollToolbar';

export const useAppToolbar = () => {
  const appRoute = useRouteChange();

  // eslint-disable-next-line no-undef
  const toolbarByAppRoute: OptionalRecord<EAppRoutes, ReactElement> = {
    [EAppRoutes.ARTICLES]: <ScrollToolbar />,
    [EAppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
    [EAppRoutes.MAIN]: <ScrollToolbar />,
    [EAppRoutes.ABOUT]: <ScrollToolbar />,
  };

  return toolbarByAppRoute[appRoute];
};
