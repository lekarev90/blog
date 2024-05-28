import { FC, ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { ERoles, getUserAuthData } from '@/entities/User';

import { getRouteForbidden, getRouteMain } from '@/shared/const/router';

interface RequireAuthProps {
  children: ReactNode;
  roles?: ERoles[];
}

export const RequireAuth : FC<RequireAuthProps> = ({ children, roles }) => {
  const { authData } = useSelector(getUserAuthData);
  const location = useLocation();

  const isUserHasAccess = useMemo(() => roles && authData?.roles?.some((role) => roles.includes(role)), [authData?.roles, roles]);

  if (!authData) {
    return (
      <Navigate
        to={getRouteMain()}
        state={{ from: location }}
        replace
      />
    );
  }

  if (roles && !isUserHasAccess) {
    return (
      <Navigate
        to={getRouteForbidden()}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};
