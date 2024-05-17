import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country, CountrySelectorFieldName } from '../../model/types/country';

interface CountrySelectorProps {
  value?: Country;
  onChange: (value: string, name: CountrySelectorFieldName) => void;
  isReadonly: boolean;
}

const options = [
  {
    value: Country.RUSSIA, content: Country.RUSSIA,
  },
  {
    value: Country.SPAIN, content: Country.SPAIN,
  },
  {
    value: Country.USA, content: Country.USA,
  },
  {
    value: Country.UKRAINE, content: Country.UKRAINE,
  },
];
export const CountrySelect = memo(({ value, isReadonly, onChange }: CountrySelectorProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange(value, 'country');
  }, [onChange]);

  return (
    <ListBox
      items={options}
      onChange={onChangeHandler}
      value={value}
      disabled={isReadonly}
      label={t('translation:countrySelectorLabel')}
      defaultValue={t('translation:countrySelectorDefaultValue')}
    />
  );
});
