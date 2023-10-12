import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import {
  getSearchRangeSelector,
  getSearchRangeSelectorEnd,
  getSearchSelector,
} from "./redux/slices/filterSlice";
import { getQueryKey } from "./utils";
import classes from "./selectField.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faXmark } from "@fortawesome/free-solid-svg-icons";

export const TodoList = () => {
  const divRef = useRef();
  const select1Ref = useRef();
  const select2Ref = useRef();

  console.log("render todo list!");

  const search = useSelector(getSearchSelector);
  const rangeStart = useSelector(getSearchRangeSelector);
  const rangeEnd = useSelector(getSearchRangeSelectorEnd);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: getQueryKey(search, rangeStart, rangeEnd),
    queryFn: () =>
      fetch(
        `https://test-front.framework.team/paintings/?q=${search}&created_gte=${rangeStart}&created_lte=${rangeEnd}`
      ).then((res) => res.json()),
    // queryFn: () =>
    //   fetch(`https://test-front.framework.team/authors/`).then((res) =>
    //     res.json()
    //   ),
  });

  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    error: error2,
  } = useQuery({
    queryKey: ["GET_ALL_AUTHORS", search],
    queryFn: () =>
      fetch(`https://test-front.framework.team/authors/`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error is {error}</p>;

  if (isLoading2) return <p>Loading2...</p>;

  if (isError2) return <p>Error is {error2}</p>;

  const onClickSelectActive = () => {
    divRef.current.hidden = "hidden";
    select1Ref.current.multiple = true;
  };

  const onClickSelectActive2 = () => {
    divRef.current.hidden = "hidden";
    select2Ref.current.multiple = true;
  };
  const onFocus = () => {
    select1Ref.current.multiple = true;
  };
  const onFocus2 = () => {
    select2Ref.current.multiple = true;
  };

  data2.unshift({ id: 0, name: "Author" });

  return (
    <>
      <div ref={divRef}>
        {data.map((d, i) => (
          <div key={d.id}>
            <p>{d.name} ✅</p>
          </div>
        ))}
      </div>
      <div className={`${classes.selector}`}>
        <div className={`${classes.selectField}`}>
          <p>Author !!!!</p>
          <div>
            <FontAwesomeIcon
              icon={faXmark}
              style={{
                color: "#878787",
                paddingRight: "10px",
              }}
            />
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{
                color: "#878787",
                paddingBottom: "1px",
              }}
            />
          </div>
        </div>
        <ul className={`${classes.list}`}>
          {data2.map((d, i) => (
            <li className={`${classes.options}`} key={i}>
              {d.name}
            </li>
          ))}
        </ul>

        <select
          ref={select1Ref}
          onClick={onClickSelectActive}
          placeholder="Author"
          onFocus={onFocus}
        >
          {data2.map((d, i) => (
            <option key={i}>{d.name}</option>
          ))}{" "}
        </select>
      </div>

      {/* TODO: для локации будет тут ДИВ отдельный  */}
      <div style={{ padding: "80px" }}>
        <select
          ref={select2Ref}
          onClick={onClickSelectActive2}
          placeholder="Location"
          onFocus={onFocus2}
        >
          {data2.map((d, i) => (
            <option key={i}>{d.name}</option>
          ))}
        </select>
      </div>
    </>
  );
};
