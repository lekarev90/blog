import { ECurrency } from '../const/const';

export interface CurrencySelectField {
  currency?: ECurrency;
}

export type CurrencySelectorFieldName = keyof CurrencySelectField
