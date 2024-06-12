import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { ListBox } from '@/shared/ui/depricated/ListBox';

import { ECurrency } from '../../model/const/const';
import { CurrencySelectorFieldName } from '../../model/types/ECurrency';

interface CurrencySelectorProps {
  value?: ECurrency;
  onChange: (value: string, name: CurrencySelectorFieldName) => void;
  isReadonly: boolean;
}

const options = [
  {
    value: ECurrency.RUR,
    content: ECurrency.RUR,
  },
  {
    value: ECurrency.EUR,
    content: ECurrency.EUR,
  },
  {
    value: ECurrency.USD,
    content: ECurrency.USD,
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
