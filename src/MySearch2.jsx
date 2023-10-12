import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  changeSearchFilter,
  changeSearchRange,
  changeSearchRangeEnd,
  getSearchRangeSelector,
  getSearchRangeSelectorEnd,
  getSearchSelector,
} from "./redux/slices/filterSlice";

export default function MySearch2() {
  const searchValue = useSelector(getSearchSelector);
  const rangeStart = useSelector(getSearchRangeSelector);
  const rangeEnd = useSelector(getSearchRangeSelectorEnd);
  // console.log("range start from", rangeStart);
  // console.log("range end from", rangeEnd);

  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(() => {
    const searchValueFromQuery = searchParams.get("created_gte");

    return searchValueFromQuery ?? "";
  });

  const [search2, setSearch2] = useState(() => {
    const searchValueFromQuery = searchParams.get("created_lte");

    return searchValueFromQuery ?? "";
  });

  const changeSearchHandlerRangeStart = (e) => {
    const newSearchValue = e.target.value;
    setSearch(newSearchValue);
    setSearchParams(() => {
      return {
        q: searchValue ?? "",
        created_gte: newSearchValue,
        created_lte: rangeEnd ?? "2023",
      };
    });
    dispatch(changeSearchRange(newSearchValue));
  };

  const changeSearchHandlerRangeEnd = (e) => {
    let newSearchValue = e.target.value;
    // if (newSearchValue === "") {
    //   newSearchValue = "2023";
    // }
    setSearch2(newSearchValue);
    setSearchParams(() => {
      return {
        q: searchValue ?? "",
        created_gte: rangeStart ?? "0",
        created_lte: newSearchValue,
      };
    });
    dispatch(changeSearchRangeEnd(newSearchValue));
  };

  return (
    <div>
      <input
        type="number"
        value={search}
        onChange={changeSearchHandlerRangeStart}
        placeholder="from"
      />
      <input
        type="number"
        value={search2}
        onChange={changeSearchHandlerRangeEnd}
        placeholder="before"
      />
    </div>
  );
}
