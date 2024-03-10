import { IProfile } from 'features/EditableProfileCard';
import { TFunction } from 'react-i18next';

import { ValidateProfileError } from '../../../model/types/profile';

export const getValidateTextError = (t: TFunction) => ({
  [ValidateProfileError.SERVER_ERROR]: t('profile:errors.server_error'),
  [ValidateProfileError.NO_DATA]: t('profile:errors.no_data'),
  [ValidateProfileError.INCORRECT_USER_DATA]: t('profile:errors.incorrect_user_data'),
  [ValidateProfileError.INCORRECT_AGE]: t('profile:errors.age'),
});

export const validateProfileData = (profile: IProfile | undefined) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const { firstName, lastName, age } = profile;

  const errors: ValidateProfileError[] = [];

  if (!firstName || !lastName) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  return errors;
};
