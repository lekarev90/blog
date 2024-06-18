import { FC, memo } from 'react';

import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/depricated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import { IArticleImageBlock } from '../../model/types/article';

import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps extends IArticleImageBlock {
  className?: string;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = memo(({ src, title }) => (
  <VStack gap="8" align="center">
    <img alt={title} src={src} className={styles.image} />
    {title && <ToggleFeatures feature="isOldDesign" on={<TextDeprecated text={title} />} off={<Text text={title} />} />}
  </VStack>
));
