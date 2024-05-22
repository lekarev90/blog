import { memo } from 'react';
import classNames from 'classnames/bind';

import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';

import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { RouterPath } from '@/shared/config/routeConfig/routeConfig';

import { IComment } from '../../model/types/comment';

import styles from './CommentCard.module.scss';

const cx = classNames.bind(styles);

interface CommentCardProps extends IComment {
  className?: string;
}

export const CommentCard = memo(({ user, text, className }: CommentCardProps) => {
  const { username, avatar, id: userId } = user;

  return (
    <div className={cx(styles.container, className)}>
      <AppLink to={`${RouterPath.profile}/${userId}`} className={styles.header}>
        {avatar && <Avatar src={avatar} alt={username} size={30} />}
        <Text title={username} />
      </AppLink>
      <Text text={text} className={styles.text} />
    </div>
  );
});
