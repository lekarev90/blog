import { getQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

describe('shared/lib/url/addQueryParams', () => {
  test('Should return added one param', () => {
    const params = getQueryParams({
      test: 'value',
    });

    expect(params).toBe('?test=value');
  });

  test('Should return added multiply params', () => {
    const params = getQueryParams({
      test1: 'value1',
      test2: 'value2',
      test3: 'value3',
    });

    expect(params).toBe('?test1=value1&test2=value2&test3=value3');
  });

  test('Should return one param if passed multiply and one of them is undef', () => {
    const params = getQueryParams({
      test: 'value',
      someUndefParam: undefined,
    });

    expect(params).toBe('?test=value');
  });
});
