import { memo } from 'react';

import IconUp from '@/shared/assets/icons/circle-up.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

export const ScrollToTopButton = memo(() => {
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Icon
      Svg={IconUp}
      clickable
      onClick={onClick}
      width={32}
      height={32}
    />
  );
});
