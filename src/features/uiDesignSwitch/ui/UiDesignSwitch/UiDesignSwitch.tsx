import { memo, useState } from 'react';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { getUserAuthData } from '@/entities/User';
import { getFeatureFlag, updateFeaturesFlags } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { ListBox } from '@/shared/ui/redesigned/ListBox';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

export const UiDesignSwitch = memo(() => {
  const dispatch = useAppDispatch();

  const { authData } = useSelector(getUserAuthData);

  const { t } = useTranslation();
  const isOldDesignEnabled = getFeatureFlag('isOldDesign');

  const [isLoading, setIsLoding] = useState(false);

  const items = [
    {
      content: t('translation:design.new'),
      value: 'new',
    },
    {
      content: t('translation:design.old'),
      value: 'old',
    },
  ];

  const onChangeHandle = async (value: string) => {
    setIsLoding(true);

    await dispatch(
      updateFeaturesFlags({
        userId: authData!.id,
        newFeatures: {
          isOldDesign: value === 'old',
        },
      }),
    );
  };

  return isLoading ? <Skeleton height={32} width={200} borderRadius="12px" />
    : (
      <ListBox
        showLabelArea={false}
        buttonVariant="dark"
        name="design_switch"
        onChange={onChangeHandle}
        items={items}
        value={isOldDesignEnabled ? 'old' : 'new'}
      />
    );
});
