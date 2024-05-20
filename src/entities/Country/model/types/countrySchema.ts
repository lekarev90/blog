import { ECountrySchema } from '../const/const';

export interface CountrySelectField {
  country?: ECountrySchema;
}

export type CountrySelectorFieldName = keyof CountrySelectField
