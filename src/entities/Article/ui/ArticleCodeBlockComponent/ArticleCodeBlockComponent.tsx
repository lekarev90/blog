import { Code } from 'shared/ui/Code/Code';
import { Text } from 'shared/ui/Text/Text';

import { IArticleCodeBlock } from '../../model/types/article';

import styles from './ArticleCodeBlockComponent.module.scss';

export const ArticleCodeBlockComponent = ({ title, code }: IArticleCodeBlock) => (
  <div className={styles.container}>
    <Code text={code} />
    {code && (
      <Text
        className={styles.title}
        text={title}
      />
    ) }
  </div>
);
