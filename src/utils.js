export const getQueryKey = (search, rangeStart, rangeEnd, currentPage) => [
  'GET_ALL_TODOS',
  search,
  rangeStart,
  rangeEnd,
  currentPage,
];

export const getQueryKeyForAuthorId = (authorId) => [
  'GET_ALL_AUTHORS',
  authorId,
];

export const getQueryKeyForLocation = (somePlace) => [
  'GET_ALL_LOCATIONS',
  somePlace,
];
