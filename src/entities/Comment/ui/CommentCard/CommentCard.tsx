import { memo } from 'react';
import classNames from 'classnames/bind';

import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import { IComment } from '../../model/types/comment';

import styles from './CommentCard.module.scss';

const cx = classNames.bind(styles);

interface CommentCardProps extends IComment{
  className?: string;
  isLoading?: boolean;
}

export const CommentCard = memo(
  ({
    user, text, className, isLoading = false,
  }: CommentCardProps) => {
    const { username, avatar, id: userId } = user;

    if (isLoading) {
      return (
        <div className={cx(styles.container, className)}>
          <div className={styles.header}>
            <Skeleton
              width={30}
              height={30}
              borderRadius="50%"
            />
            <Skeleton
              width={100}
              height={16}
            />
          </div>
          <Skeleton
            width="100%"
            height={50}
          />
        </div>
      );
    }

    return (
      <div className={cx(styles.container, className)}>
        <AppLink
          to={`${RouterPath.profile}/${userId}`}
          className={styles.header}
        >
          {avatar && (
            <Avatar
              src={avatar}
              alt={username}
              size={30}
            />
          )}
          <Text title={username} />
        </AppLink>
        <Text
          text={text}
          className={styles.text}
        />
      </div>
    );
  },
);
