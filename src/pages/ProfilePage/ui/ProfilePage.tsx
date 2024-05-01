import React, { memo, useEffect } from 'react';

import { fetchProfileData, profileReducer } from 'features/EditableProfileCard';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import { Profile } from 'widgets/Profile';
import { useParams } from 'react-router';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{id: string, know: string}>();

  useEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Profile />
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
