import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  changeSearchRange,
  changeSearchRangeEnd,
  getSearchRangeSelector,
  getSearchRangeSelectorEnd,
  getSearchSelector,
} from "./redux/slices/filterSlice";
import classes from "./selectField.module.css";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MySearch2() {
  const [isCreated, setIsCreated] = useState("Created");
  const [isHidden, setIsHidden] = useState(true);

  const refDownRange = useRef();
  const refUpRange = useRef();
  const refInputRanges = useRef();

  const searchValue = useSelector(getSearchSelector);
  const rangeStart = useSelector(getSearchRangeSelector);
  const rangeEnd = useSelector(getSearchRangeSelectorEnd);

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

  const onCLickDownRange = () => {
    refDownRange.current.hidden = true;
    refUpRange.current.hidden = false;
    setIsHidden(false);
    console.log("r1");

    // divRef.current.hidden = true;
  };

  const onClickUpRange = () => {
    refDownRange.current.hidden = false;
    refUpRange.current.hidden = true;
    setIsHidden(true);
    console.log("r2");
  };

  const onClickSelectFieldRange = () => {
    if (refInputRanges.current.hidden === true) {
      refInputRanges.current.hidden = false;
      refInputRanges.current.className = `${classes.specialRangeContainer}`;
      refDownRange.current.hidden = true;
      refUpRange.current.hidden = false;
    } else if (refInputRanges.current.hidden === false) {
      refInputRanges.current.hidden = true;
      refInputRanges.current.className = ``;
      refDownRange.current.hidden = false;
      refUpRange.current.hidden = true;
    }
  };

  return (
    <div className={`${classes.flexContainer}`}>
      <div className={`${classes.middleFlexElement}`}>
        <div
          onClick={onClickSelectFieldRange}
          className={`${classes.elInFlexContainer}`}
        >
          <p>{isCreated}</p>

          <div className={`${classes.faDivs}`}>
            <div ref={refDownRange}>
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{
                  color: "#878787",
                  paddingBottom: "1px",
                }}
                onClick={onCLickDownRange}
              />
            </div>

            <div ref={refUpRange} hidden>
              <FontAwesomeIcon
                icon={faCaretUp}
                fade
                style={{
                  color: "#878787",
                  paddingTop: "1px",
                }}
                onClick={onClickUpRange}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={refInputRanges}
        hidden={isHidden}
        // className={`${classes.specialRangeContainer}`}
        // onClick={}
      >
        <input
          type="number"
          value={search}
          onChange={changeSearchHandlerRangeStart}
          placeholder="from"
          className={`${classes.inputRange}`}
        />
        <span>—</span>
        <input
          type="number"
          value={search2}
          onChange={changeSearchHandlerRangeEnd}
          placeholder="before"
          className={`${classes.inputRange}`}
        />
      </div>
    </div>
  );
}
