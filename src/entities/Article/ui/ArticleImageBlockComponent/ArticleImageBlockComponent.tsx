import { FC, memo } from 'react';

import { IArticleImageBlock } from '../../model/types/article';

import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps extends IArticleImageBlock{
  className?: string;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = memo(({ src, title }) => (
  <p className={styles.container}>
    <img
      alt={title}
      src={src}
      className={styles.image}
    />
    <span className={styles.title}>
      {title}
    </span>
  </p>
));
