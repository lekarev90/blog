import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { validateProfileData } from '../validateProfileData/validateProfileData';
import { IProfile, ValidateProfileError } from '../../types/profile';

const profile: IProfile = {
  age: '30',
  firstName: 'Ivan',
  lastName: 'Ivanov',
  city: 'Moscow',
  username: 'Vano_8000',
  currency: Currency.RUR,
  country: Country.RUSSIA,
  avatar: 'url',
};
describe('validateProfileData', () => {
  test('success', async () => {
    const result = validateProfileData(profile);

    expect(result).toEqual([]);
  });

  test('with array of validation errors', async () => {
    const expected = validateProfileData({ ...profile, firstName: '', age: 'age' });
    const result = [ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE];

    expect(expected).toEqual(result);
  });
});
