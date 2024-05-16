import { FC, memo } from 'react';

import { VStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { IArticleImageBlock } from '../../model/types/article';

import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps extends IArticleImageBlock{
  className?: string;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = memo(({ src, title }) => (
  <VStack gap="8" align="center">
    <img alt={title} src={src} className={styles.image} />
    {title && <Text text={title} size={TextSize.M} textTag="span" />}
  </VStack>
));
