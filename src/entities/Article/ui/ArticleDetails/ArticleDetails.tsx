import { FC, memo } from 'react';

import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Avatar } from '@/shared/ui/depricated/Avatar';
import { Icon } from '@/shared/ui/depricated/Icon';
import { Text, TextSize } from '@/shared/ui/depricated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import { EArticleBlockType } from '../../model/const/const';
import { IArticle, TArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

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
  <VStack Component="article" gap="16" data-testid="ArticleDetails">
    <VStack gap="4">
      {img && <Avatar alt={title} src={img} size={200} />}
      {title && <Text size={TextSize.L} title={title} text={subtitle} titleDataTestId="ArticleDetails.Title" />}
      <HStack gap="4">
        <Icon Svg={EyeIcon} />
        <Text text={views} />
      </HStack>
      <HStack gap="4">
        <Icon Svg={CalendarIcon} />
        <Text text={createdAt} />
      </HStack>
    </VStack>
    <VStack gap="32">
      {blocks.map(({ type, id, ...articleData }) => {
        const Component = BLOCKS[type];

        return <Component key={id} {...articleData} />;
      })}
    </VStack>
  </VStack>
));
