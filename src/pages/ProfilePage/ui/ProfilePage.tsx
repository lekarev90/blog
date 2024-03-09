import React, { memo, useEffect } from 'react';

import { fetchProfileData, profileReducer } from 'features/EditableProfileCard';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import { Profile } from 'widgets/Profile';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Profile />
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
