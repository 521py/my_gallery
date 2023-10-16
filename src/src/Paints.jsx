import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import {
  getCurrentPage,
  getSearchRangeSelector,
  getSearchRangeSelectorEnd,
  getSearchSelector,
} from "./redux/slices/filterSlice";
import { getQueryKey } from "./utils";
import classes from "./selectField.module.css";
import { useState } from "react";

export const Paints = () => {
  const search = useSelector(getSearchSelector);
  const rangeStart = useSelector(getSearchRangeSelector);
  const rangeEnd = useSelector(getSearchRangeSelectorEnd);
  const currentPage = useSelector(getCurrentPage);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: getQueryKey(search, rangeStart, rangeEnd, currentPage),
    queryFn: () =>
      fetch(
        `https://test-front.framework.team/paintings/?q=${search}&created_gte=${rangeStart}&created_lte=${rangeEnd}&_page=${currentPage}&_limit=12`
      ).then((res) => res.json()),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error from search req is {error}</p>;

  return (
    <>
      <div className={`${classes.Paints}`}>
        {data.map((d, i) => (
          <div key={d.id}>
            <p>{d.name} ✅</p>
          </div>
        ))}
      </div>
    </>
  );
};