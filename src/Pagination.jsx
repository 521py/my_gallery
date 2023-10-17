import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, setCurrentPage } from "./redux/slices/filterSlice";
import classes from "./selectField.module.css";

export const Pagination = () => {
  const refLastPage = useRef();
  const refFirstPage = useRef();
  const refReactPaginate = useRef();
  const [isArray, setIsArray] = useState([]);

  const currentPage = useSelector(getCurrentPage);
  const dispatch = useDispatch();

  const onPageChange = ({ selected }) => {
    console.log("this page was changed");
    dispatch(setCurrentPage(selected + 1));

    console.log(selected + 1);
    if (selected + 1 === 1) {
      refLastPage.current.style.color = "black";
      refFirstPage.current.style.color = "whitesmoke";
    } else if (selected + 1 === pageCount) {
      refLastPage.current.style.color = "whitesmoke";
      refFirstPage.current.style.color = "black";
    } else if (selected + 1 !== 1 && selected + 1 !== pageCount) {
      refLastPage.current.style.color = "black";
      refFirstPage.current.style.color = "black";
    }
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["GET_ARRAY_LENGTH"],
    queryFn: () =>
      fetch(`https://test-front.framework.team/paintings/`).then((res) =>
        res.json().then((data) => {
          setIsArray(data);
          return 2;
        })
      ),
  });

  console.log(isArray.length);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error from search req is {error}</p>;

  const pageCount = Math.ceil(isArray.length / 12);

  const onClickFirstPage = () => {
    dispatch(setCurrentPage(1));
    refLastPage.current.style.color = "black";
    refFirstPage.current.style.color = "whitesmoke";
  };

  const onClickLastPage = () => {
    dispatch(setCurrentPage(Math.ceil(isArray.length / 12)));
    refLastPage.current.style.color = "whitesmoke";
    refFirstPage.current.style.color = "black";
  };

  return (
    <>
      <div className={`${classes.mainDiv}`}>
        <div
          ref={refFirstPage}
          className={`${classes.lessThan}`}
          onClick={onClickFirstPage}
        >
          <FontAwesomeIcon icon={faAnglesLeft} />
        </div>

        <ReactPaginate
          ref={refReactPaginate}
          nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
          previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
          pageCount={pageCount}
          forcePage={currentPage - 1}
          onPageChange={onPageChange}
          containerClassName={`${classes.containerPaginate}`}
          previousLinkClassName={`${classes.previousPaginate}`}
          nextLinkClassName={`${classes.nextPaginate}`}
          disabledClassName={`${classes.disabledPaginate}`}
          activeClassName={`${classes.activePaginate}`}
          pageLinkClassName={`${classes.allPagesPaginate}`}
        />
        <div
          ref={refLastPage}
          className={`${classes.moreThan}`}
          onClick={onClickLastPage}
        >
          <FontAwesomeIcon icon={faAnglesRight} />
        </div>
      </div>
    </>
  );
};
