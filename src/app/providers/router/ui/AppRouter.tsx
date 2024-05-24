import {
  type FC, Fragment, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './RequireAuth';

import { TAppRouterProps, routeConfig } from '../config/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';

export const AppRouter: FC = () => {
  const renderWithWrapper = useCallback(({
    path, element, isAuthOnly, roles,
  }: TAppRouterProps) => {
    const Wrapper = isAuthOnly ? RequireAuth : Fragment;
    const wrapperProps = roles ? { roles } : {};

    const page = (
      <Wrapper {...wrapperProps}>
        <Suspense fallback={<PageLoader />}>
          {element}
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
