import { ECountrySchema } from '@/entities/Country';
import { ECurrency } from '@/entities/Currency';

import { EValidateProfileError } from '../../const/const';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { IProfile } from '../../types/profileCardSchema';

const profile: IProfile = {
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
describe('validateProfileData', () => {
  test('success', async () => {
    const result = validateProfileData(profile);

    expect(result).toEqual([]);
  });

  test('with array of validation errors', async () => {
    const expected = validateProfileData({ ...profile, firstName: '', age: 'age' });
    const result = [EValidateProfileError.INCORRECT_USER_DATA, EValidateProfileError.INCORRECT_AGE];

    expect(expected).toEqual(result);
  });
});
