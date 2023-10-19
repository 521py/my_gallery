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
import { getCurrentTheme } from "./redux/slices/themeSlice";
import classes from "./styles.module.css";
import "./Pagination.css";

export const Pagination = () => {
  const theme = useSelector(getCurrentTheme);

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

    if (selected + 1 === 1 && theme === "light") {
      refLastPage.current.style.color = "black";
      refFirstPage.current.style.color = "whitesmoke";
    } else if (selected + 1 === pageCount && theme === "light") {
      refLastPage.current.style.color = "whitesmoke";
      refFirstPage.current.style.color = "black";
    } else if (
      selected + 1 !== 1 &&
      selected + 1 !== pageCount &&
      theme === "light"
    ) {
      refLastPage.current.style.color = "dimgray";
      refFirstPage.current.style.color = "dimgray";
    } else if (selected + 1 === 1 && theme === "dark") {
      refLastPage.current.style.color = "gray";
      refFirstPage.current.style.color = "darkslategray";
    } else if (selected + 1 === pageCount && theme === "dark") {
      refLastPage.current.style.color = "darkslategray";
      refFirstPage.current.style.color = "gray";
    } else if (
      selected + 1 !== 1 &&
      selected + 1 !== pageCount &&
      theme === "dark"
    ) {
      refLastPage.current.style.color = "gray";
      refFirstPage.current.style.color = "gray";
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
    if (theme === "light") {
      refLastPage.current.style.color = "black";
      refFirstPage.current.style.color = "whitesmoke";
    } else if (theme === "dark") {
      refLastPage.current.style.color = "gray";
      refFirstPage.current.style.color = "darkslategray";
    }
  };

  const onClickLastPage = () => {
    dispatch(setCurrentPage(Math.ceil(isArray.length / 12)));
    if (theme === "light") {
      refLastPage.current.style.color = "whitesmoke";
      refFirstPage.current.style.color = "black";
    } else if (theme === "dark") {
      refLastPage.current.style.color = "darkslategray";
      refFirstPage.current.style.color = "gray";
    }
  };

  return (
    <>
      <div className={`${classes.mainDiv}`}>
        <a
          ref={refFirstPage}
          className={`lessThan` + (theme === `light` ? `` : `Dark`)}
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
            `containerPaginate` + (theme === `light` ? `` : `Dark`)
          }
          previousLinkClassName={
            `previousPaginate` + (theme === `light` ? `` : `Dark`)
          }
          nextLinkClassName={`nextPaginate` + (theme === `light` ? `` : `Dark`)}
          disabledClassName={
            `disabledPaginate` + (theme === `light` ? `` : `Dark`)
          }
          activeClassName={`activePaginate` + (theme === `light` ? `` : `Dark`)}
          pageLinkClassName={
            `allPagesPaginate` + (theme === `light` ? `` : `Dark`)
          }
        />
        <a
          ref={refLastPage}
          className={`moreThan` + (theme === `light` ? `` : `Dark`)}
          onClick={onClickLastPage}
        >
          <FontAwesomeIcon icon={faAnglesRight} />
        </a>
      </div>
    </>
  );
};
