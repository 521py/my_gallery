/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
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

  const refLastPage = useRef();
  const refFirstPage = useRef();
  const refReactPaginate = useRef();
  const [isArray, setIsArray] = useState([]);

  const currentPage = useSelector(getCurrentPage);
  const dispatch = useDispatch();

  const onPageChange = ({ selected }) => {
    dispatch(setCurrentPage(selected + 1));
  };

  const {
    // eslint-disable-next-line no-unused-vars
    data, isLoading, isError, error,
  } = useQuery({
    queryKey: ['GET_ARRAY_LENGTH'],
    // eslint-disable-next-line no-shadow
    queryFn: () => fetch('https://test-front.framework.team/paintings/').then((res) => res.json().then((data) => {
      setIsArray(data);
      return 2;
    })),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) {
    return (
      <p>
        Error from search req is
        {error}
      </p>
    );
  }

  const pageCount = Math.ceil(isArray.length / 12);

  const onClickFirstPage = () => {
    dispatch(setCurrentPage(1));
  };

  const onClickLastPage = () => {
    dispatch(setCurrentPage(Math.ceil(isArray.length / 12)));
  };

  console.log(currentPage, '!');

  return (
    <div className={`${classes.mainDiv}`}>
      <a
        ref={refFirstPage}
        className={
            `lessThan${
              // eslint-disable-next-line no-nested-ternary
              theme === 'light' && currentPage === '1'
                ? 'Disabled'
                : theme === 'light' && currentPage !== 1
                  ? ''
                  : 'Disabled'}`
          }
        onClick={onClickFirstPage}
      >
        <FontAwesomeIcon icon={faAnglesLeft} />
      </a>

      <ReactPaginate
        ref={refReactPaginate}
        nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
        previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
        pageCount={pageCount}
        forcePage={currentPage - 1}
        onPageChange={onPageChange}
        containerClassName={
            `containerPaginate${theme === 'light' ? '' : 'Dark'}`
          }
        previousLinkClassName={
            `previousPaginate${
              // eslint-disable-next-line no-nested-ternary
              theme === 'light' && currentPage === '1'
                ? 'Disabled'
                : theme === 'light' && currentPage !== 1
                  ? ''
                  : 'Disabled'}`
          }
        nextLinkClassName={
            `nextPaginate${
              theme === 'light' && currentPage !== pageCount ? '' : 'Disabled'}`
          }
        disabledClassName={
            `disabledPaginate${theme === 'light' ? '' : 'Dark'}`
          }
        activeClassName={`activePaginate${theme === 'light' ? '' : 'Dark'}`}
        pageLinkClassName={
            `allPagesPaginate${theme === 'light' ? '' : 'Dark'}`
          }
      />
      <a
        ref={refLastPage}
        className={
            `moreThan${
              theme === 'light' && currentPage !== pageCount ? '' : 'Disabled'}`
          }
        onClick={onClickLastPage}
      >
        <FontAwesomeIcon icon={faAnglesRight} />
      </a>
    </div>
  );
};
