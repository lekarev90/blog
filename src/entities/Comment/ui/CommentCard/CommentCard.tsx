import { memo } from 'react';

import classNames from 'classnames/bind';

import { getRouteProfile } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/depricated/AppLink';
import { Avatar } from '@/shared/ui/depricated/Avatar';
import { Text } from '@/shared/ui/depricated/Text';

import { IComment } from '../../model/types/comment';

import styles from './CommentCard.module.scss';

const cx = classNames.bind(styles);

interface CommentCardProps extends IComment {
  className?: string;
}

export const CommentCard = memo(({
  user, text, className,
}: CommentCardProps) => {
  const { username, avatar, id: userId } = user;

  return (
    <div className={cx(styles.container, className)} data-testid="CommentCard">
      <AppLink to={getRouteProfile(userId)} className={styles.header}>
        {avatar && <Avatar src={avatar} alt={username} size={30} />}
        <Text title={username} />
      </AppLink>
      <Text text={text} className={styles.text} textDataTestId="CommentCard.Text" />
    </div>
  );
});
