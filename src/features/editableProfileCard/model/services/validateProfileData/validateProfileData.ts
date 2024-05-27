import { TFunction } from 'react-i18next';

import { EValidateProfileError } from '../../const/const';
import { IProfile } from '../../types/profileCardSchema';

export const getValidateTextError = (t: TFunction) => ({
  [EValidateProfileError.SERVER_ERROR]: t('profile:errors.server_error'),
  [EValidateProfileError.NO_DATA]: t('profile:errors.no_data'),
  [EValidateProfileError.INCORRECT_USER_DATA]: t('profile:errors.incorrect_user_data'),
  [EValidateProfileError.INCORRECT_AGE]: t('profile:errors.age'),
});

export const validateProfileData = (profile: IProfile | undefined) => {
  if (!profile) {
    return [EValidateProfileError.NO_DATA];
  }

  const { firstName, lastName, age } = profile;

  const errors: EValidateProfileError[] = [];

  if (!firstName || !lastName) {
    errors.push(EValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(+age)) {
    errors.push(EValidateProfileError.INCORRECT_AGE);
  }

  return errors;
};
