import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

import '@/app/styles/index.scss';
import App from './app/App';
import '@/shared/config/i18n/i18n';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
);
