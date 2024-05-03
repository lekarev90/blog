import { FC, memo } from 'react';

import { Text } from 'shared/ui/Text/Text';

import { IArticleTextBlock } from '../../model/types/article';

import styles from './ArticleTextBlockComponent.module.scss';

export const ArticleTextBlockComponent: FC<IArticleTextBlock> = memo(({
  title,
  paragraphs,
}) => (
  <>
    {title && (
      <Text
        title={title}
        className={styles.title}
      />
    )}
    {paragraphs.map((paragraph) => (
      <p key={paragraph}>
        { paragraph }
      </p>
    ))}
  </>
));
