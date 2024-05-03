import { memo } from 'react';

import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';

import EyeIcon from 'shared/assets/icons/eye-20-20.svg';

import { IArticle } from '../../../../model/types/article';

import styles from './ArticleListItemList.module.scss';

export const ArticleListItemList = memo(({
  img, title, createdAt, types, views,
}: IArticle) => (
  <Card className={styles.container}>
    <div className={styles.imageWrapper}>
      <img src={img} alt={title} className={styles.img} />
      <Text text={createdAt} className={styles.date} />
    </div>
    <div className={styles.infoWrapper}>
      <Text text={types.join(', ')} className={styles.typesWrapper} descriptionClassName={styles.typesText} />
      <Text text={String(views)} className={styles.views} />
      <Icon Svg={EyeIcon} />
    </div>
    <Text text={title} className={styles.title} />
  </Card>
));
