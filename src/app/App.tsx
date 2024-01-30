import { AppRouter } from 'app/providers/router';
import React, { type FC, Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App: FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className={classNames({ className: 'app', additional: [theme] })}>
      <Suspense fallback="">
        <Navbar />
        <div className="main-container">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
