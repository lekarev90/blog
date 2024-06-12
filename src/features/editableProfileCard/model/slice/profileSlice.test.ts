import { ECountrySchema } from '@/entities/Country';
import { ECurrency } from '@/entities/Currency';
import { DeepPartial } from '@/shared/const/types';

import { EValidateProfileError } from '../const/const';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { IProfile, IProfileSchema } from '../types/profileCardSchema';

import { profileActions, profileReducer } from './profileSlice';

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

describe('profileSlice.test', () => {
  test('update profile', () => {
    const state: DeepPartial<IProfileSchema> = { data: { username: '123' } };
    const newValue = 'Ivan';

    const resultState: DeepPartial<IProfileSchema> = {
      data: {
        username: newValue,
      },
    };

    const expected = profileReducer(state as IProfileSchema, profileActions.setProfileDataValue({ value: newValue, name: 'username' }));

    expect(expected).toEqual(resultState);
  });

  test('restore to prev data profile', () => {
    const prevData = { username: 'prev username' };

    const state: DeepPartial<IProfileSchema> = {
      data: { username: '123' },
      validateProfileError: [EValidateProfileError.INCORRECT_USER_DATA],
      prevData,
    };

    const resultState: DeepPartial<IProfileSchema> = {
      data: prevData,
      prevData,
    };

    const expected = profileReducer(state as IProfileSchema, profileActions.restoreProfileData());

    expect(expected).toEqual(resultState);
  });

  test('updateProfileData pending', () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: false,
      validateProfileError: [EValidateProfileError.INCORRECT_USER_DATA],
    };

    const resultState: DeepPartial<IProfileSchema> = {
      isLoading: true,
    };

    const expected = profileReducer(state as IProfileSchema, updateProfileData.pending(''));

    expect(expected).toEqual(resultState);
  });

  test('updateProfileData fulfilled', () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: false,
      validateProfileError: [EValidateProfileError.INCORRECT_USER_DATA],
    };

    const resultState: DeepPartial<IProfileSchema> = {
      isLoading: false,
      data: userData,
    };

    const expected = profileReducer(state as IProfileSchema, updateProfileData.fulfilled(userData, ''));

    expect(expected).toEqual(resultState);
  });

  test('updateProfileData rejected', () => {
    const validateProfileError = [EValidateProfileError.INCORRECT_USER_DATA];
    const state: DeepPartial<IProfileSchema> = {
      isLoading: true,
    };

    const resultState: DeepPartial<IProfileSchema> = {
      isLoading: false,
      validateProfileError,
    };

    const expected = profileReducer(state as IProfileSchema, updateProfileData.rejected(null, '', undefined, validateProfileError));

    expect(expected).toEqual(resultState);
  });

  test('fetchProfileData fulfilled', () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: true,
      validateProfileError: [EValidateProfileError.INCORRECT_USER_DATA],
    };

    const resultState: DeepPartial<IProfileSchema> = {
      isLoading: false,
      data: userData,
      prevData: userData,
    };

    const expected = profileReducer(state as IProfileSchema, fetchProfileData.fulfilled(userData, '', '1'));

    expect(expected).toEqual(resultState);
  });

  test('fetchProfileData pending', () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: false,
      validateProfileError: [EValidateProfileError.INCORRECT_USER_DATA],
    };

    const resultState: DeepPartial<IProfileSchema> = {
      isLoading: true,
    };

    const expected = profileReducer(state as IProfileSchema, fetchProfileData.pending('', '1'));

    expect(expected).toEqual(resultState);
  });

  test('fetchProfileData rejected', () => {
    const validateProfileError = [EValidateProfileError.INCORRECT_USER_DATA];
    const state: DeepPartial<IProfileSchema> = {
      isLoading: true,
    };

    const resultState: DeepPartial<IProfileSchema> = {
      isLoading: false,
      validateProfileError,
    };

    const expected = profileReducer(state as IProfileSchema, fetchProfileData.rejected(null, '', '1', validateProfileError));

    expect(expected).toEqual(resultState);
  });
});
