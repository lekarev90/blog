import { Country, Currency } from 'shared/const/common';

export interface IProfile {
  firstName: string,
  lastName: string,
  age: string,
  currency: Currency,
  country: Country,
  city: string,
  username: string,
  avatar: string
  'some-value'?: string
}

export interface IProfileSchema {
  data?: IProfile
  prevData?: IProfile
  isLoading: boolean
  error?: string
}

export type TProfileFieldName = keyof IProfile
