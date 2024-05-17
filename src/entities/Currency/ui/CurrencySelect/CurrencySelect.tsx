import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Currency, CurrencySelectorFieldName } from '../../model/types/currency';

interface CurrencySelectorProps {
  value?: Currency;
  onChange: (value: string, name: CurrencySelectorFieldName) => void;
  isReadonly: boolean;
}

const options = [
  {
    value: Currency.RUR,
    content: Currency.RUR,
  },
  {
    value: Currency.EUR,
    content: Currency.EUR,
  },
  {
    value: Currency.USD,
    content: Currency.USD,
  },
];

export const CurrencySelect = memo(({ value, isReadonly, onChange }: CurrencySelectorProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange(value, 'currency');
  }, [onChange]);

  return (
    <ListBox
      items={options}
      onChange={onChangeHandler}
      value={value}
      disabled={isReadonly}
      label={t('translation:currencySelectorLabel')}
      defaultValue={t('translation:currencySelectorDefaultValue')}
    />
  );
});
