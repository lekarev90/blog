import { FC, memo } from 'react';

import { IArticle } from 'entities/Article';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text, TextSize } from 'shared/ui/Text/Text';

import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';

import { ArticleBlockType, TArticleBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';

import styles from './ArticleDetails.module.scss';

interface ArticleDetailsProps extends IArticle {
  className?: string;
}

// TODO разобраться с FC<TArticleBlock & any>
const BLOCKS: Record<ArticleBlockType, FC<TArticleBlock & any>> = {
  [ArticleBlockType.CODE]: ArticleCodeBlockComponent,
  [ArticleBlockType.IMAGE]: ArticleImageBlockComponent,
  [ArticleBlockType.TEXT]: ArticleTextBlockComponent,
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo(({
  blocks, title, subtitle, img, views, createdAt,
}) => (
  <>
    {img && (
      <div className={styles.avatarWrapper}>
        <Avatar
          className={styles.img}
          alt={title}
          src={img}
          size={200}
        />
      </div>
    )}
    {title && (
      <Text
        size={TextSize.L}
        title={title}
        text={subtitle}
      />
    )}
    <div className={styles.textWithIcon}>
      <Icon Svg={EyeIcon} />
      <Text text={views} />
    </div>
    <div className={styles.textWithIcon}>
      <Icon Svg={CalendarIcon} />
      <Text text={createdAt} />
    </div>
    <div className={styles.blocksWrapper}>
      {blocks.map(({ type, id, ...articleData }) => {
        const Component = BLOCKS[type];

        return (
          <Component
            key={id}
            {...articleData}
          />
        );
      })}
    </div>
  </>
));
