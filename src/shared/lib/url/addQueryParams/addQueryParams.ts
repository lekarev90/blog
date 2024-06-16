// eslint-disable-next-line no-undef
export const getQueryParams = (params: OptionalRecord<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([name, value]) => {
    if (value) {
      searchParams.set(name, value);
    }

    if (value === '') {
      searchParams.delete(name);
    }
  });

  return `?${searchParams.toString()}`;
};

// eslint-disable-next-line no-undef
export const addQueryParams = (params: OptionalRecord<string, string>) => {
  window.history.pushState(null, '', getQueryParams(params));
};
