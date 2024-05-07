import { memo } from 'react';
import { useNavigate } from 'react-router';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';

import { Text, TextSize } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';

import EyeIcon from 'shared/assets/icons/eye-20-20.svg';

import { IArticle } from '../../../../model/types/article';

import styles from './ArticleListItemList.module.scss';

export const ArticleListItemList = memo(({
  img, title, createdAt, types, views, id,
}: IArticle) => {
  const navigate = useNavigate();
  const onCardClickHandler = () => {
    navigate(`${RouterPath.articles}/${id}`);
  };

  return (
    <Card className={styles.container} onClick={onCardClickHandler}>
      <div className={styles.imageWrapper}>
        <img src={img} alt={title} className={styles.img} />
        <Text size={TextSize.S} text={createdAt} className={styles.dateWrapper} descriptionClassName={styles.dateText} />
      </div>
      <div className={styles.infoWrapper}>
        <Text text={types.join(', ')} className={styles.typesWrapper} descriptionClassName={styles.typesText} />
        <Text text={String(views)} className={styles.views} />
        <Icon Svg={EyeIcon} />
      </div>
      <Text text={title} className={styles.title} />
    </Card>
  );
});
