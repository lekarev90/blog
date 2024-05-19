import { getUserAuthData } from 'entities/User';
import { FC, ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import { ERoles } from 'entities/User/model/types/userSchema';

interface RequireAuthProps {
  children: ReactNode
  roles?: ERoles[]
}

export const RequireAuth : FC<RequireAuthProps> = ({ children, roles }) => {
  const { authData } = useSelector(getUserAuthData);
  const location = useLocation();

  const isUserHasAccess = useMemo(() => roles && authData?.roles?.some((role) => roles.includes(role)), [authData?.roles, roles]);

  if (!authData) {
    return (
      <Navigate
        to={RouterPath.main}
        state={{ from: location }}
        replace
      />
    );
  }

  if (roles && !isUserHasAccess) {
    return (
      <Navigate
        to={RouterPath.access_denied}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};
