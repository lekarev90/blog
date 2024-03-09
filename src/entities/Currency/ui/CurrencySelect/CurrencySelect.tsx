import { useTranslation } from 'react-i18next';

import { Select } from 'shared/ui/Select/Select';

import { Currency, CurrencySelectorFieldName } from '../../model/types/currency';

interface CurrencySelectorProps {
  value?: Currency;
  onChangeHandler: (value: string, name: CurrencySelectorFieldName) => void;
  isReadonly: boolean;
}

const options = [
  {
    value: Currency.RUR, content: Currency.RUR,
  },
  {
    value: Currency.EUR, content: Currency.EUR,
  },
  {
    value: Currency.USD, content: Currency.USD,
  },
];

export const CurrencySelect = ({ value, isReadonly, onChangeHandler }: CurrencySelectorProps) => {
  const { t } = useTranslation();

  return (
    <Select<CurrencySelectorFieldName>
      value={value}
      label={t('translation:currencySelectorLabel')}
      name="currency"
      onChange={onChangeHandler}
      isReadonly={isReadonly}
      options={options}
    />
  );
};
