import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import {
  ArticleTextBlockComponent, EArticleBlockType, IArticle, IArticleTextBlock,
} from '@/entities/Article';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/depricated/AppLink';
import { Avatar } from '@/shared/ui/depricated/Avatar';
import { Button, ButtonVariants } from '@/shared/ui/depricated/Button';
import { Card } from '@/shared/ui/depricated/Card';
import { Icon } from '@/shared/ui/depricated/Icon';
import { Skeleton } from '@/shared/ui/depricated/Skeleton';
import { Text } from '@/shared/ui/depricated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';

import styles from './ArticleListItemListDeprecated.module.scss';

export const ArticleListItemListDeprecated = memo(({
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
        <Icon Svg={EyeIcon} width={20} height={20} />
      </div>
    </Card>
  );
});
