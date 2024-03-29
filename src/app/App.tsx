import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { userActions, getIsUserInit } from 'entities/User';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const isUserInitialized = useSelector(getIsUserInit);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className="app">
      <Suspense fallback="">
        <Navbar />
        <div className="main-container">
          <Sidebar />
          {isUserInitialized && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
