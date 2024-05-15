import { memo } from 'react';

import { Page } from 'shared/ui/Page/Page';
import { useParams } from 'react-router';

const ArticlesEditPage = memo(() => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page>
      {id ? `edit article - ${id}` : 'create article'}
    </Page>
  );
});

export default ArticlesEditPage;
