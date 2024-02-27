import React, { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { profileReducer } from 'entities/Profile';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div>
        {t('translation:profilePage.bodyText')}
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
