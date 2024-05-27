import { CountrySelectField } from '@/entities/Country';
import { CurrencySelectField } from '@/entities/Currency';
import { EValidateProfileError } from '../const/const';

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
  validateProfileError?: EValidateProfileError[];
}

export type TProfileFieldName = keyof IProfile;
