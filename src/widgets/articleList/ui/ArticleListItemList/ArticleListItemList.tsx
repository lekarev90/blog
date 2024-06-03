import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { Button, ButtonVariants } from '@/shared/ui/Button';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';

import {
  ArticleTextBlockComponent, EArticleBlockType, IArticle, IArticleTextBlock,
} from '@/entities/Article';

import styles from './ArticleListItemList.module.scss';

export const ArticleListItemList = memo(({
  user, views, createdAt, types, title, img, blocks, id,
}: IArticle) => {
  const { t } = useTranslation();
  const textBlock = blocks.find((block) => block.type === EArticleBlockType.TEXT) as IArticleTextBlock;

  return (
    <Card className={styles.container} data-testid="ArticlesList.Item.List">
      <div className={styles.header}>
        {user.avatar && <Avatar src={user.avatar} alt={user.username} size={30} />}
        <Text text={user.username} className={styles.user} />
        <Text text={createdAt} className={styles.date} />
      </div>
      <Text text={title} className={styles.title} />
      <Text text={types.join(', ')} className={styles.types} />
      <AppImage fallback={<Skeleton width="100%" height={250} />} src={img} alt={title} className={styles.img} />
      {textBlock && (
        <div className={styles.textBlock}>
          <ArticleTextBlockComponent {...textBlock} />
        </div>
      )}
      <div className={styles.footer}>
        <AppLink to={getRouteArticleDetails(id)}>
          <Button variant={ButtonVariants.OUTLINE}>
            {t('translation:readMore')}
          </Button>
        </AppLink>
        <Text text={String(views)} className={styles.views} />
        <Icon Svg={EyeIcon} />
      </div>
    </Card>
  );
});
