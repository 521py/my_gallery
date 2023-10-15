import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, setCurrentPage } from "./redux/slices/filterSlice";
import classes from "./selectField.module.css";

export const Pagination = () => {
  const [isArray, setIsArray] = useState([]);

  const currentPage = useSelector(getCurrentPage);
  const dispatch = useDispatch();

  const onPageChange = ({ selected }) => {
    console.log(1);
    dispatch(setCurrentPage(selected + 1));
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["GET_ARRAY_LENGTH"],
    queryFn: () =>
      fetch(`https://test-front.framework.team/paintings/`).then((res) =>
        res.json().then((data) => {
          setIsArray(data);
          return 1;
        })
      ),
  });

  console.log(isArray.length);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error from search req is {error}</p>;

  const pageCount = Math.ceil(isArray.length / 12);

  return (
    <>
      <div className={`${classes.mainDiv}`}>
        <a className={`${classes.lessThan}`}>&lt;&lt;</a>
        <ReactPaginate
          nextLabel=">"
          previousLabel="<"
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
        <div>&gt;&gt;</div>
      </div>
    </>
  );
};
