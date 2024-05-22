import { memo } from 'react';

import { useParams } from 'react-router';
import { Page } from '@/shared/ui/Page/Page';

const ArticlesEditPage = memo(() => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page>
      {id ? `edit article - ${id}` : 'create article'}
    </Page>
  );
});

export default ArticlesEditPage;
