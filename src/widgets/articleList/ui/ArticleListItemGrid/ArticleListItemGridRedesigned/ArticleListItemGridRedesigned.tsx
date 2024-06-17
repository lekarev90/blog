import { memo } from 'react';

import { IArticle } from '@/entities/Article';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import styles from './ArticleListItemGridRedesigned.module.scss';

export const ArticleListItemGridRedesigned = memo(({
  img, title, createdAt, views, id, user,
}: IArticle) => (
  <AppLink className={styles.container} to={getRouteArticleDetails(id)}>
    <VStack
      gap="8"
      flexWrap={false}
      className={styles.card}
      Component={Card}
      padding="0"
      borderRadius="rounded"
      data-testid="ArticlesList.Item.Grid"
    >
      <AppImage fallback={<Skeleton width={200} height={140} />} src={img} alt={title} className={styles.img} />
      <VStack gap="8" className={styles.infoWrapper} flexWrap={false}>
        <Text title={title} />
        <VStack gap="4" maxWidth justify="end" className={styles.footer}>
          <HStack justify="between" maxWidth>
            <Text text={createdAt} />
            <HStack gap="4" align="center">
              <Icon Svg={EyeIcon} width={32} height={32} />
              <Text text={String(views)} />
            </HStack>
          </HStack>
          <HStack gap="8">
            <Avatar size={32} src={user.avatar} alt="user avatar" />
            <Text bold text={user.username} />
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  </AppLink>

));
