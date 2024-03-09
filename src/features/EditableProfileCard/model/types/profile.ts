import { CountrySelectField } from 'entities/Country';
import { CurrencySelectField } from 'entities/Currency';

export interface IProfile extends CountrySelectField, CurrencySelectField {
  firstName: string,
  lastName: string,
  age: string,
  city: string,
  username: string,
  avatar: string
}

export interface IProfileSchema {
  data?: IProfile
  prevData?: IProfile
  isLoading: boolean
  error?: string
}

export type TProfileFieldName = keyof IProfile
