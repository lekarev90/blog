import { CountrySelectField } from 'entities/Country';
import { CurrencySelectField } from 'entities/Currency';

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  SERVER_ERROR = 'SERVER_ERROR',
  NO_DATA = 'NO_DATA',
}

export interface IProfile extends CountrySelectField, CurrencySelectField {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  city: string;
  username: string;
  avatar: string;
}

export interface IProfileSchema {
  data?: IProfile;
  prevData?: IProfile;
  isLoading: boolean;
  validateProfileError?: ValidateProfileError[];
}

export enum EProfileCardTestIdInputs {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  AGE = 'age',
  USERNAME = 'username'
}

export enum EProfileCardTestIdButtons {
  EDIT_BUTTON = 'editButton',
  SAVE_BUTTON = 'saveButton',
}

export type TProfileFieldName = keyof IProfile;
