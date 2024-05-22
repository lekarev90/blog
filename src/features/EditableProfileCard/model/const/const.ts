import { getTestIdValue } from '@/shared/lib/utils/getTestIdValue';

export const getProfileCardTestId = getTestIdValue('profile_card');

export enum EValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  SERVER_ERROR = 'SERVER_ERROR',
  NO_DATA = 'NO_DATA',
}

export enum EProfileCardTestIdInputs {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  AGE = 'age',
  USERNAME = 'username',
}

export enum EProfileCardTestIdButtons {
  EDIT_BUTTON = 'editButton',
  SAVE_BUTTON = 'saveButton',
}
