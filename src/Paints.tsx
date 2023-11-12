import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import {
  getCurrentPage,
  getSearchRangeSelector,
  getSearchRangeSelectorEnd,
  getSearchSelector,
} from './redux/slices/filterSlice';
import { getQueryKey } from './utils';
import classes from './styles.module.css';

export const Paints = () => {
  const search = useSelector(getSearchSelector);
  const rangeStart = useSelector(getSearchRangeSelector);
  const rangeEnd = useSelector(getSearchRangeSelectorEnd);
  const currentPage = useSelector(getCurrentPage);

  const params = new URLSearchParams({
    q: search,
    created_gte: rangeStart,
    created_lte: rangeEnd,
    _page: currentPage,
    _limit: '12'
  })

  const baseUrl = 'https://test-front.framework.team/paintings/';
  const url = `${baseUrl}?${params.toString()}`;

  interface IPaint {
    "authorId": number,
    "created": string,
    "id": number,
    "imageUrl": string,
    "locationId": number,
    "name": string
  }

  const { data: paints, isLoading, isError, error } = useQuery<IPaint[]>({
    queryKey: getQueryKey(search, rangeStart, rangeEnd, currentPage),
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error from search req is {error.toString()}</p>;

  return (
    <div className={`${classes.Paints}`}>
      {paints?.map((paint) => (
        <div className={`${classes.card}`} key={paint.id}>
          <img
            src={`https://test-front.framework.team${paint.imageUrl}`}
            alt={paint.name}
            width='300px'
            className={`${classes.cardImg}`}
          />
          <div className={`${classes.intro}`}>
            <h2>{paint.name}</h2>
            <p>
              <strong>AuthorId: </strong>
              {paint.authorId}
              <br />
              <br />
              <strong>Created: </strong>
              {paint.created}
              <br />
              <br />
              <strong>LocationId: </strong>
              {paint.locationId}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
