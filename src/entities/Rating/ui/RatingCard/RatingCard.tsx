import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BrowserView, MobileView } from 'react-device-detect';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonVariants } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (startCount: number) => void;
  onAccept?: (startCount: number, feedback?: string) => void;
}

export const RatingCard = memo(({
  title, feedbackTitle, hasFeedback, onCancel, onAccept,
}: RatingCardProps) => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(0);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);

    if (hasFeedback) {
      setIsModalOpen(true);
    }

    onAccept?.(selectedStarsCount);
  }, [hasFeedback, onAccept]);

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input name="feedbackRating" placeholder={t('translation:feedbackRating.placeholder')} onChange={setFeedback} />
    </>
  );

  return (
    <Card>
      <VStack gap="8" align="center">
        <Text title={title} />
        <StarRating size={40} onSelect={onSelectStars} />
      </VStack>

      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack maxWidth gap="32">
            {modalContent}
            <HStack gap="16" justify="end">
              <Button onClick={cancelHandle} variant={ButtonVariants.OUTLINE_RED}>
                {t('translation:feedbackRating.closeBtn')}
              </Button>
              <Button onClick={acceptHandle} variant={ButtonVariants.OUTLINE}>
                {t('translation:feedbackRating.sendFeedbackBtn')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} onClose={cancelHandle} lazy>
          <VStack gap="16">
            {modalContent}
            <Button isWide onClick={acceptHandle} variant={ButtonVariants.OUTLINE}>
              {t('translation:feedbackRating.sendFeedbackBtn')}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
});
