import { Code } from '@/shared/ui/depricated/Code';
import { VStack } from '@/shared/ui/depricated/Stack';
import { Text } from '@/shared/ui/depricated/Text';

import { IArticleCodeBlock } from '../../model/types/article';

export const ArticleCodeBlockComponent = ({ title, code }: IArticleCodeBlock) => (
  <VStack gap="8" align="center">
    <Code text={code} />
    {title && (
      <Text
        text={title}
      />
    ) }
  </VStack>
);
