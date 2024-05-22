import { ECountrySchema } from '@/entities/Country';
import { ECurrency } from '@/entities/Currency';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { EValidateProfileError } from '../../const/const';
import { IProfile, IProfileSchema } from '../../types/profileCardSchema';
import { updateProfileData } from './updateProfileData';

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

const profile: IProfileSchema = {
  isLoading: false,
  data: userData,
};

describe('updateProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile });

    thunk.api.put.mockResolvedValue({ data: userData });
    const result = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(userData);
  });

  test('error with validate', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        ...profile,
        data: { ...userData, firstName: '', age: 'hi' },
      },
    });

    thunk.api.put.mockResolvedValue({ });

    const result = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.put).toHaveBeenCalledTimes(0);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      EValidateProfileError.INCORRECT_USER_DATA,
      EValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test('error with server error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile });
    thunk.api.put.mockResolvedValue({ status: 403 });
    const result = await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([EValidateProfileError.SERVER_ERROR]);
  });
});
