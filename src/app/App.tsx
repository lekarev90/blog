import React, { type FC, Suspense, useEffect } from 'react';

import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App: FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="app">
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
