import { RequireAuth } from 'app/providers/router/ui/RequireAuth';
import {
  type FC, Fragment, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppRouterProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter: FC = () => {
  const renderWithWrapper = useCallback(({ path, element, isAuthOnly }: AppRouterProps) => {
    const Wrapper = isAuthOnly ? RequireAuth : Fragment;

    const page = (
      <Wrapper>
        <Suspense fallback={<PageLoader />}>
          <div className="page-wrapper">
            {element}
          </div>
        </Suspense>
      </Wrapper>
    );

    return (
      <Route
        key={path}
        path={path}
        element={page}
      />
    );
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  );
};
