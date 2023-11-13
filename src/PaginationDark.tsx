/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/prefer-default-export */
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
import { getCurrentPage, setCurrentPage } from './redux/slices/filterSlice.ts';
import { getCurrentTheme } from './redux/slices/themeSlice.ts';
import classes from './styles.module.css';
import './Pagination.css';

export function PaginationDark() {
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
        {`${error}`}
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

  return (
    <div className={`${classes.mainDiv}`}>
      <button
        ref={refFirstPage}
        className={
          `lessThan${theme === 'dark' && currentPage === '1'
            ? 'DarkDisabled'
            : theme === 'dark' && Number(currentPage) !== 1
              ? 'Dark'
              : 'DarkDisabled'}`
        }
        onClick={onClickFirstPage}
        type="button"
      >
        <FontAwesomeIcon icon={faAnglesLeft} />
      </button>

      <ReactPaginate
        nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
        previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
        pageCount={pageCount}
        forcePage={Number(currentPage) - 1}
        onPageChange={onPageChange}
        containerClassName={
          `containerPaginate${theme === 'dark' ? 'Dark' : ''}`
        }
        previousLinkClassName={
          `previousPaginate${theme === 'dark' && currentPage === '1'
            ? 'DarkDisabled'
            : theme === 'dark' && Number(currentPage) !== 1
              ? 'Dark'
              : 'DarkDisabled'}`
        }
        nextLinkClassName={
          `nextPaginate${theme === 'dark' && Number(currentPage) === pageCount
            ? 'DarkDisabled'
            : theme === 'dark' && Number(currentPage) !== pageCount
              ? 'Dark'
              : 'DarkDisabled'}`
        }
        disabledClassName={
          `disabledPaginate${theme === 'dark' ? 'Dark' : ''}`
        }
        activeClassName={`activePaginate${theme === 'dark' ? 'Dark' : ''}`}
        pageLinkClassName={
          `allPagesPaginate${theme === 'dark' ? 'Dark' : ''}`
        }
      />
      <button
        ref={refLastPage}
        className={
          `moreThan${theme === 'dark' && Number(currentPage) === pageCount
            ? 'DarkDisabled'
            : 'Dark'}`
        }
        onClick={onClickLastPage}
        type="button"
      >
        <FontAwesomeIcon icon={faAnglesRight} />
      </button>
    </div>
  );
}
