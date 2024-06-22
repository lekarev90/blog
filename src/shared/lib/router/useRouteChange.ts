import { useEffect, useState } from 'react';

import { matchPath, useLocation } from 'react-router';

import { AppRouteByPathPattern, EAppRoutes } from '@/shared/const/router';

export const useRouteChange = () => {
  const location = useLocation();
  const [appRoute, setAppRoute] = useState<EAppRoutes>(EAppRoutes.MAIN);

  useEffect(() => {
    Object.entries(AppRouteByPathPattern).forEach(([pattern, route]) => {
      if (matchPath(pattern, location.pathname)) {
        setAppRoute(route);
      }
    });
  }, [location.pathname]);

  return appRoute;
};
