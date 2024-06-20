import { FC, memo } from 'react';

import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { ToggleFeatures } from '@/shared/lib/features';
import { Avatar as AvatarDeprecated } from '@/shared/ui/depricated/Avatar';
import { Icon as IconDeprecated } from '@/shared/ui/depricated/Icon';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/depricated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import { EArticleBlockType } from '../../model/const/const';
import { IArticle, TArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import styles from './ArticlesDetails.module.scss';

interface ArticleDetailsProps extends IArticle {
  className?: string;
}

// TODO разобраться с FC<TArticleBlock & any>
const BLOCKS: Record<EArticleBlockType, FC<TArticleBlock & any>> = {
  [EArticleBlockType.CODE]: ArticleCodeBlockComponent,
  [EArticleBlockType.IMAGE]: ArticleImageBlockComponent,
  [EArticleBlockType.TEXT]: ArticleTextBlockComponent,
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo(({
  blocks, title, subtitle, img, views, createdAt,
}) => (
  <VStack Component="article" gap="16" data-testid="ArticleDetails" flexWrap={false}>
    <ToggleFeatures
      feature="isOldDesign"
      on={(
        <VStack gap="4">
          <AvatarDeprecated alt={title} src={img} size={200} />
          <TextDeprecated size={TextSize.L} title={title} text={subtitle} titleDataTestId="ArticleDetails.Title" />
          <HStack gap="4">
            <IconDeprecated Svg={EyeIcon} />
            <TextDeprecated text={views} />
          </HStack>
          <HStack gap="4">
            <IconDeprecated Svg={CalendarIcon} />
            <TextDeprecated text={createdAt} />
          </HStack>
        </VStack>
      )}
      off={(
        <VStack gap="8" flexWrap={false}>
          <Text boldTitle titleTag="h1" size="l" title={title} titleDataTestId="ArticleDetails.Title" />
          <Text textTag="h3" size="l" text={subtitle} titleDataTestId="ArticleDetails.Subtitle" />
          <AppImage fallback={<Skeleton height={420} width="100%" borderRadius="16px" />} src={img} alt={title} className={styles.img} />
        </VStack>
      )}
    />
    <VStack gap="32">
      {blocks.map(({ type, id, ...articleData }) => {
        const Component = BLOCKS[type];

        return <Component key={id} {...articleData} />;
      })}
    </VStack>
  </VStack>
));
