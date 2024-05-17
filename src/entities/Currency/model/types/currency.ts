export enum Currency {
  RUR = 'RUR',
  EUR = 'EUR',
  USD = 'USD',
}

export interface CurrencySelectField {
  currency?: Currency
}

export type CurrencySelectorFieldName = keyof CurrencySelectField
