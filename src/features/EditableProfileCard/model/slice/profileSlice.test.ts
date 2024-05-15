import { DeepPartial } from 'shared/const/types';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { profileActions, profileReducer } from './profileSlice';

import { IProfile, IProfileSchema, ValidateProfileError } from '../types/profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const userData: IProfile = {
  id: '1',
  age: '30',
  firstName: 'Ivan',
  lastName: 'Ivanov',
  city: 'Moscow',
  username: 'Vano_8000',
  currency: Currency.RUR,
  country: Country.RUSSIA,
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
      validateProfileError: [ValidateProfileError.INCORRECT_USER_DATA],
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
      validateProfileError: [ValidateProfileError.INCORRECT_USER_DATA],
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
      validateProfileError: [ValidateProfileError.INCORRECT_USER_DATA],
    };

    const resultState: DeepPartial<IProfileSchema> = {
      isLoading: false,
      data: userData,
    };

    const expected = profileReducer(state as IProfileSchema, updateProfileData.fulfilled(userData, ''));

    expect(expected).toEqual(resultState);
  });

  test('updateProfileData rejected', () => {
    const validateProfileError = [ValidateProfileError.INCORRECT_USER_DATA];
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
      validateProfileError: [ValidateProfileError.INCORRECT_USER_DATA],
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
      validateProfileError: [ValidateProfileError.INCORRECT_USER_DATA],
    };

    const resultState: DeepPartial<IProfileSchema> = {
      isLoading: true,
    };

    const expected = profileReducer(state as IProfileSchema, fetchProfileData.pending('', '1'));

    expect(expected).toEqual(resultState);
  });

  test('fetchProfileData rejected', () => {
    const validateProfileError = [ValidateProfileError.INCORRECT_USER_DATA];
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
