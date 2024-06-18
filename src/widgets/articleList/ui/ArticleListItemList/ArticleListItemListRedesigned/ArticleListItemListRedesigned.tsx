import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { EArticleBlockType, IArticle, IArticleTextBlock } from '@/entities/Article';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { TCardVariant } from '@/shared/ui/redesigned/Card/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import styles from './ArticleListItemListRedesigned.module.scss';

export const ArticleListItemListRedesigned = memo(({
  user, views, createdAt, types, title, img, blocks, id, subtitle, cardVariant = 'light',
}: IArticle & { cardVariant?: TCardVariant }) => {
  const { t } = useTranslation();
  const textBlock = blocks.find((block) => block.type === EArticleBlockType.TEXT) as IArticleTextBlock;

  return (
    <VStack
      gap="16"
      maxWidth
      Component={Card}
      padding="24"
      data-testid="ArticlesList.Item.List"
      variant={cardVariant}
    >
      <HStack gap="8" align="center" className={styles.header}>
        {user.avatar && <Avatar src={user.avatar} alt={user.username} size={32} />}
        <Text bold text={user.username} />
        <Text text={createdAt} />
      </HStack>
      <VStack gap="8">
        <Text bold title={title} />
        <Text text={subtitle} />
      </VStack>
      <AppImage fallback={<Skeleton width="100%" height={250} />} src={img} alt={title} className={styles.img} />
      {textBlock.paragraphs && <Text className={styles.textBlock} text={textBlock.paragraphs.slice(0, 2).join(' ')} />}
      <Text text={types.join(', ').toLowerCase()} size="s" className={styles.types} />
      <HStack align="center" justify="between" maxWidth>
        <AppLink to={getRouteArticleDetails(id)}>
          <Button variant="outline">
            {t('translation:readMore')}
          </Button>
        </AppLink>
        <HStack gap="8">
          <Icon Svg={EyeIcon} width={32} height={32} />
          <Text text={String(views)} className={styles.views} />
        </HStack>
      </HStack>
    </VStack>
  );
});
