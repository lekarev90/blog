import React, { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getUserAuthData, initAuthData } from '@/entities/User';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';

import { useAppToolbar } from './lib/useAppToolbar';
import { AppRouter } from './providers/router';
import { withTheme } from './providers/ThemeProvider';

const App = memo(() => {
  const dispatch = useAppDispatch();
  const { initialized } = useSelector(getUserAuthData);
  const ScrollToolbar = useAppToolbar();

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!initialized) {
    return (
      <ToggleFeatures
        feature="isOldDesign"
        on={<PageLoader />}
        off={(
          <div id="app" className="app_v2">
            <AppLoaderLayout />
          </div>
        )}
      />
    );
  }

  return (
    <ToggleFeatures
      feature="isOldDesign"
      on={(
        <div id="app" className="app">
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
        <div id="app" className="app_v2">
          <Suspense fallback="">
            <MainLayout header={<Navbar />} content={<AppRouter />} sidebar={<Sidebar />} toolbar={ScrollToolbar} />
          </Suspense>
        </div>
      )}
    />
  );
});

export default withTheme(App);
