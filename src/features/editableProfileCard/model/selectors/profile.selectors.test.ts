import { IStateSchema } from '@/app/providers/StoreProvider';
import { ECountrySchema } from '@/entities/Country';
import { ECurrency } from '@/entities/Currency';

import { EValidateProfileError } from '../const/const';
import { IProfile } from '../types/profileCardSchema';

import {
  getIsProfileDataSame, getProfileData, getProfileErrors, getProfileIsLoading, getProfilePrevData,
} from './profile.selectors';

const userData: IProfile = {
  id: '1',
  age: '30',
  firstName: 'Ivan',
  lastName: 'Ivanov',
  city: 'Moscow',
  username: 'Vano_8000',
  currency: ECurrency.RUR,
  country: ECountrySchema.RUSSIA,
  avatar: 'url',
};

const validateProfileError = [EValidateProfileError.INCORRECT_USER_DATA];

const profile = {
  isLoading: false,
  data: userData,
  prevData: userData,
  validateProfileError,
};

const state: Partial<IStateSchema> = {
  profile,
};

describe('profile selectors', () => {
  test('should return profile data', async () => {
    const expected = getProfileData(state as IStateSchema);

    expect(expected).toEqual(userData);
  });

  test('should return prev profile data', async () => {
    const expected = getProfilePrevData(state as IStateSchema);

    expect(expected).toEqual(userData);
  });

  test('should return profile errors', async () => {
    const expected = getProfileErrors(state as IStateSchema);

    expect(expected).toEqual(validateProfileError);
  });

  test('should return profile is loading', async () => {
    const expected = getProfileIsLoading(state as IStateSchema);
    const result = state.profile?.isLoading;

    expect(expected).toBe(result);
  });
});

describe('getIsProfileDataSame', () => {
  test('should return true if data and prevData is the same', async () => {
    const expected = getIsProfileDataSame(state as IStateSchema);

    expect(expected).toBeTruthy();
  });

  test('should return false if data and prevData is not the same', async () => {
    const modifiedState = {
      profile: {
        ...profile,
        prevData: {
          ...userData,
          lastName: 'diff',
        },
      },
    };
    const expected = getIsProfileDataSame(modifiedState as IStateSchema);

    expect(expected).toBeFalsy();
  });
});
