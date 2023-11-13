export const getQueryKey = (
  search: string,
  rangeStart: string,
  rangeEnd: string,
  currentPage: number | string,
) => ['GET_ALL_TODOS', search, rangeStart, rangeEnd, currentPage];

export const getQueryKeyForAuthorId = (authorId: string) => [
  'GET_ALL_AUTHORS',
  authorId,
];

export const getQueryKeyForLocation = (somePlace: string) => [
  'GET_ALL_LOCATIONS',
  somePlace,
];
