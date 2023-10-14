export const getQueryKey = (search, rangeStart, rangeEnd) => [
  "GET_ALL_TODOS",
  search,
  rangeStart,
  rangeEnd,
];

export const getQueryKeyForAuthorId = (authorId) => [
  "GET_ALL_AUTHORS",
  authorId,
];

export const getQueryKeyForLocation = (somePlace) => [
  "GET_ALL_LOCATIONS",
  somePlace,
];
