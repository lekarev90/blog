import { memo, useState } from 'react';

import classNames from 'classnames/bind';

import StarIcon from '@/shared/assets/icons/star.svg';

import { Icon } from '../Icon/Icon';
import { HStack } from '../Stack';

import styles from './StarRating.module.scss';

const cx = classNames.bind(styles);

interface StarRatingProps {
  onSelect: (starsCount: number) => void;
  size?: number;
  selectedStars?: number
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo(({
  size = 30, selectedStars = 0, onSelect,
}: StarRatingProps) => {
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
  const [currentStarCount, setCurrentStarCount] = useState(selectedStars);

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect(starsCount);
      setCurrentStarCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <HStack gap="8">
      {stars.map((starNumber) => {
        const isFilled = currentStarCount >= starNumber;

        return (
          <Icon
            key={starNumber}
            clickable={!isSelected}
            className={cx(styles.star, { isFilled })}
            Svg={StarIcon}
            width={size}
            height={size}
            onClick={onClick(starNumber)}
            onMouseEnter={onHover(starNumber)}
            onMouseLeave={onLeave}
            data-testid={`StarRating.${starNumber}`}
            data-selected={currentStarCount >= starNumber}
          />
        );
      })}
    </HStack>
  );
});
