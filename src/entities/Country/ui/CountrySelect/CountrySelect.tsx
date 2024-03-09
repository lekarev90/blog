import { useTranslation } from 'react-i18next';

import { Select } from 'shared/ui/Select/Select';

import { Country, CountrySelectorFieldName } from '../../model/types/country';

interface CountrySelectorProps {
  value?: Country;
  onChangeHandler: (value: string, name: CountrySelectorFieldName) => void;
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
export const CountrySelect = ({ value, onChangeHandler, isReadonly }: CountrySelectorProps) => {
  const { t } = useTranslation();

  return (
    <Select<CountrySelectorFieldName>
      value={value}
      label={t('translation:countrySelectorLabel')}
      name="country"
      onChange={onChangeHandler}
      isReadonly={isReadonly}
      options={options}
    />
  );
};
