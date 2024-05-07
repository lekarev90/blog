import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';

import EyeIcon from 'shared/assets/icons/eye-20-20.svg';

import { RouterPath } from 'shared/config/routeConfig/routeConfig';

import { IArticle, ArticleBlockType, IArticleTextBlock } from '../../../../entities/Article/model/types/article';
import { ArticleTextBlockComponent } from '../../../../entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';

import styles from './ArticleListItemGrid.module.scss';

export const ArticleListItemGrid = memo(({
  user,
  views,
  createdAt,
  types,
  title,
  img,
  blocks,
  id,
}: IArticle) => {
  const { t } = useTranslation();
  const textBlock = blocks.find((block) => block.type === ArticleBlockType.TEXT) as IArticleTextBlock;
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(`${RouterPath.article_details}${id}`);
  }, [id, navigate]);

  return (
    <Card className={styles.container}>
      <div className={styles.header}>
        {user.avatar && (
          <Avatar src={user.avatar} alt={user.username} size={30} />
        )}
        <Text text={user.username} className={styles.user} />
        <Text text={createdAt} className={styles.date} />
      </div>
      <Text text={title} className={styles.title} />
      <Text text={types.join(', ')} className={styles.types} />
      <img src={img} alt={title} className={styles.img} />
      {
        textBlock && (
          <div className={styles.textBlock}>
            <ArticleTextBlockComponent {...textBlock} />
          </div>
        )
      }
      <div className={styles.footer}>
        <Button variant={ButtonVariants.OUTLINE} onClick={onOpenArticle}>
          {t('translation:readMore')}
        </Button>
        <Text text={String(views)} className={styles.views} />
        <Icon Svg={EyeIcon} />
      </div>
    </Card>
  );
});
