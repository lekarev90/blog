export enum Country {
  RUSSIA = 'Russia',
  UKRAINE = 'Ukraine',
  USA = 'USA',
  SPAIN = 'SPAIN',
}

export interface CountrySelectField {
  country?: Country
}

export type CountrySelectorFieldName = keyof CountrySelectField
