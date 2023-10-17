import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "./hooks/useDebounce";
import {
  changeSearchFilter,
  getSearchRangeSelector,
  getSearchRangeSelectorEnd,
} from "./redux/slices/filterSlice";
import classes from "./selectField.module.css";

export default function MySearch() {
  const [isName, setIsName] = useState("Name");
  const rangeStart = useSelector(getSearchRangeSelector);
  const rangeEnd = useSelector(getSearchRangeSelectorEnd);

  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(() => {
    const searchValueFromQuery = searchParams.get("q");

    return searchValueFromQuery ?? "";
  });

  const debauncedSearchValue = useDebounce(search, 1000);

  const changeSearchHandler = (e) => {
    const newSearchValue = e.target.value;
    setSearch(newSearchValue);

    setSearchParams(() => {
      return {
        q: newSearchValue,
        created_gte: rangeStart ?? "0",
        created_lte: rangeEnd ?? "2023",
      };
    });
  };

  useEffect(() => {
    dispatch(changeSearchFilter(debauncedSearchValue));
  }, [debauncedSearchValue, dispatch]);

  return (
    <div className={`${classes.flexContainerForInput}`}>
      <div className={`${classes.middleFlexElement}`}>
        <input
          type="search"
          value={search}
          onChange={changeSearchHandler}
          placeholder={isName}
          className={`${classes.elInFlexContainer}`}
        />
      </div>
    </div>
  );
}
