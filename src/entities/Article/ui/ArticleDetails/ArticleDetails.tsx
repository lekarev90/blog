import { FC, memo } from 'react';

import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text, TextSize } from 'shared/ui/Text/Text';

import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';

import { HStack, VStack } from 'shared/ui/Stack';
import { IArticle, EArticleBlockType, TArticleBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';

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
  <VStack Component="article" gap="16">
    <VStack gap="4">
      {img && <Avatar alt={title} src={img} size={200} />}
      {title && <Text size={TextSize.L} title={title} text={subtitle} />}
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
