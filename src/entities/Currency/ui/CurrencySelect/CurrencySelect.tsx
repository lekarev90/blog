import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/depricated/ListBox';
import { ListBox } from '@/shared/ui/redesigned/ListBox';

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

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange(value, 'currency');
    },
    [onChange],
  );

  return (
    <ToggleFeatures
      feature="isOldDesign"
      on={(
        <ListBoxDeprecated
          items={options}
          onChange={onChangeHandler}
          value={value}
          disabled={isReadonly}
          label={t('translation:currencySelectorLabel')}
          defaultValue={t('translation:currencySelectorDefaultValue')}
        />
      )}
      off={(
        <ListBox
          items={options}
          onChange={onChangeHandler}
          value={value}
          disabled={isReadonly}
          label={t('translation:currencySelectorLabel')}
          defaultValue={t('translation:currencySelectorDefaultValue')}
          name="currency"
        />
      )}
    />
  );
});
