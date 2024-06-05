import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getUserAuthData, initAuthData } from '@/entities/User';
import { AppRouter } from './providers/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { PageLoader } from '@/widgets/PageLoader';

const App = () => {
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
    <div className="app">
      <Suspense fallback="">
        <Navbar />
        <div className="main-container">
          <Sidebar />
          {initialized && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
