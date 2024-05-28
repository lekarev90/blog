import { memo } from 'react';

import { Page } from '@/shared/ui/Page';

const AccessDeniedPage = memo(() => <Page data-testid="forbidden-page">Access denied</Page>);

export default AccessDeniedPage;
