import qs from "query-string";

export const setQuery = (history: any, newQuery: { [query: string]: any }) => {
  const actualQuery = qs.parse(history.location.search);
  const query = { ...actualQuery, ...newQuery };
  history.push({ search: qs.stringify(query) });
};

export const getQuery = (history: any, name: string) => {
  return new URLSearchParams(history.location.search).get(name);
};
