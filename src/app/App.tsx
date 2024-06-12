import React, { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getUserAuthData, initAuthData } from '@/entities/User';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';
import { withTheme } from './providers/ThemeProvider';

const App = memo(() => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const { initialized } = useSelector(getUserAuthData);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!initialized) {
    return <PageLoader />;
  }

  return (
    <ToggleFeatures
      feature="isOldDesign"
      on={(
        <div className="app">
          <Suspense fallback="">
            <Navbar />
            <div className="main-container">
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      )}
      off={(
        <div className="app_v2">
          <Suspense fallback="">
            <MainLayout header={<Navbar />} content={<AppRouter />} sidebar={<Sidebar />} />
          </Suspense>
        </div>
      )}
    />
  );
});

export default withTheme(App);
