import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  getSearchAuthorIdSelector,
  getSearchRangeSelector,
  getSearchRangeSelectorEnd,
  getSearchSelector,
} from "./redux/slices/filterSlice";
import {
  getQueryKey,
  getQueryKeyForAuthorId,
  getQueryKeyForLocation,
} from "./utils";
import classes from "./selectField.module.css";
// import { Select } from "fwt-internship-uikit";
import Select from "react-select";

export const TodoList = () => {
  const [dif, setDif] = useState("Author");
  const [loc, setLoc] = useState("Location");

  const divRef = useRef();

  console.log("render todo list!");

  const search = useSelector(getSearchSelector);
  const rangeStart = useSelector(getSearchRangeSelector);
  const rangeEnd = useSelector(getSearchRangeSelectorEnd);
  const authorId = useSelector(getSearchAuthorIdSelector);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: getQueryKey(search, rangeStart, rangeEnd),
    queryFn: () =>
      fetch(
        `https://test-front.framework.team/paintings/?q=${search}&created_gte=${rangeStart}&created_lte=${rangeEnd}`
      ).then((res) => res.json()),
  });

  const {
    data: data2,
    isLoading: isLoading2,
    isError: isError2,
    error: error2,
  } = useQuery({
    queryKey: getQueryKeyForAuthorId(authorId),
    queryFn: () =>
      fetch(`https://test-front.framework.team/authors/${authorId}`).then(
        (res) => res.json()
      ),
  });

  const {
    data: data3,
    isLoading: isLoading3,
    isError: isError3,
    error: error3,
  } = useQuery({
    queryKey: ["GET_ALL_LOCATIONS"],
    queryFn: () =>
      fetch(`https://test-front.framework.team/locations/`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error from search req is {error}</p>;
  if (isLoading2) return <p>Loading authors...</p>;
  if (isError2) return <p>Error from author req is {error2}</p>;
  if (isLoading3) return <p>Loading loc...</p>;
  if (isError3) return <p>Error from loc req is {error3}</p>;

  const some = (e) => {
    console.log(e);
    divRef.current.hidden = "hidden";
    setDif(e);
  };

  const someLocFunc = (e) => {
    console.log(e);
    divRef.current.hidden = "hidden";
    setLoc(e);
  };

  // console.log(loc);
  console.log(data3);

  return (
    <>
      <div ref={divRef}>
        {data.map((d, i) => (
          <div key={d.id}>
            <p>{d.name} ✅</p>
          </div>
        ))}
      </div>

      <Select
        value={dif}
        options={data2}
        className={`${classes.BestSelect}`}
        onChange={some}
      />

      <div>
        <Select
          value={loc}
          options={data3}
          className={`${classes.BestSelect}`}
          onChange={someLocFunc}
        />
      </div>
    </>
  );
};
