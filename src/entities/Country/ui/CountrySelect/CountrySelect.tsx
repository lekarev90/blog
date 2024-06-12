import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { ListBox } from '@/shared/ui/ListBox';

import { ECountrySchema } from '../../model/const/const';
import { CountrySelectorFieldName } from '../../model/types/countrySchema';

interface CountrySelectorProps {
  value?: ECountrySchema;
  onChange: (value: string, name: CountrySelectorFieldName) => void;
  isReadonly: boolean;
}

const options = [
  {
    value: ECountrySchema.RUSSIA, content: ECountrySchema.RUSSIA,
  },
  {
    value: ECountrySchema.SPAIN, content: ECountrySchema.SPAIN,
  },
  {
    value: ECountrySchema.USA, content: ECountrySchema.USA,
  },
  {
    value: ECountrySchema.UKRAINE, content: ECountrySchema.UKRAINE,
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
