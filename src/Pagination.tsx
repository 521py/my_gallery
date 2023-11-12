import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, setCurrentPage } from './redux/slices/filterSlice';
import { getCurrentTheme } from './redux/slices/themeSlice';
import classes from './styles.module.css';
import './Pagination.css';

export const Pagination = () => {
  const theme = useSelector(getCurrentTheme);

  const refLastPage = useRef<HTMLButtonElement>(null);
  const refFirstPage = useRef<HTMLButtonElement>(null);

  const [isArray, setIsArray] = useState([]);

  const currentPage = useSelector(getCurrentPage);
  const dispatch = useDispatch();

  interface IOnPageChange {
    selected: number
  }

  const onPageChange = ({ selected }: IOnPageChange) => {
    dispatch(setCurrentPage(selected + 1));
  };

  const { isLoading, isError, error } = useQuery({
    queryKey: ['GET_ARRAY_LENGTH'],
    queryFn: () =>
      fetch(`https://test-front.framework.team/paintings/`).then((res) =>
        res.json().then((data) => {
          setIsArray(data);
          return 2;
        })
      ),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error from search req is {error.toString()}</p>;

  const pageCount = Math.ceil(isArray.length / 12);

  const onClickFirstPage = () => {
    dispatch(setCurrentPage(1));
  };

  const onClickLastPage = () => {
    dispatch(setCurrentPage(Math.ceil(isArray.length / 12)));
  };

  console.log(currentPage, '!');

  return (
    <>
      <div className={`${classes.mainDiv}`}>
        <button
          ref={refFirstPage}
          className={
            `lessThan` +
            (theme === `light` && currentPage === '1'
              ? `Disabled`
              : theme === `light` && currentPage !== 1
                ? ``
                : `Disabled`)
          }
          onClick={onClickFirstPage}
        >
          <FontAwesomeIcon icon={faAnglesLeft} />
        </button>

        <ReactPaginate

          nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
          previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
          pageCount={pageCount}
          forcePage={currentPage - 1}
          onPageChange={onPageChange}
          containerClassName={
            `containerPaginate` + (theme === `light` ? `` : `Dark`)
          }
          previousLinkClassName={
            `previousPaginate` +
            (theme === `light` && currentPage === '1'
              ? `Disabled`
              : theme === `light` && currentPage !== 1
                ? ``
                : `Disabled`)
          }
          nextLinkClassName={
            `nextPaginate` +
            (theme === `light` && currentPage !== pageCount ? `` : `Disabled`)
          }
          disabledClassName={
            `disabledPaginate` + (theme === `light` ? `` : `Dark`)
          }
          activeClassName={`activePaginate` + (theme === `light` ? `` : `Dark`)}
          pageLinkClassName={
            `allPagesPaginate` + (theme === `light` ? `` : `Dark`)
          }
        />
        <button
          ref={refLastPage}
          className={
            `moreThan` +
            (theme === `light` && currentPage !== pageCount ? `` : `Disabled`)
          }
          onClick={onClickLastPage}
        >
          <FontAwesomeIcon icon={faAnglesRight} />
        </button>
      </div>
    </>
  );
};
