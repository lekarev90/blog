import React, { memo, useEffect } from 'react';
import { useParams } from 'react-router';

import { fetchProfileData, profileReducer } from 'features/EditableProfileCard';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import { Profile } from 'widgets/Profile';
import { Page } from 'shared/ui/Page/Page';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string; know: string }>();

  useEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        <Profile />
      </Page>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
