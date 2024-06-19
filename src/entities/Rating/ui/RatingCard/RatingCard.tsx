import { memo } from 'react';

import { ToggleFeatures } from '@/shared/lib/features';

import { RatingCardDeprecated } from '../RatingCardDeprecated/RatingCardDeprecated';
import { RatingCardRedesigned } from '../RatingCardRedesigned/RatingCardRedesigned';

interface RatingCardProps {
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (startCount: number) => void;
  onAccept?: (startCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => (
  <ToggleFeatures feature="isOldDesign" on={<RatingCardDeprecated {...props} />} off={<RatingCardRedesigned {...props} />} />
));
