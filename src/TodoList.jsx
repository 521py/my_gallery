import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getSearchAuthorIdSelector } from "./redux/slices/filterSlice";
import { getQueryKeyForAuthorId } from "./utils";
import classes from "./selectField.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faXmark,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

export const TodoList = () => {
  const [isFalse, setIsFalse] = useState(true);
  const [isFalse2, setIsFalse2] = useState(true);
  const [isAuthor, setIsAuthor] = useState("Author");
  const [isLocation, setIsLocation] = useState("Location");

  const divRef = useRef();
  const select1Ref = useRef();
  const refClose = useRef();
  const refClose2 = useRef();
  const select2Ref = useRef();
  const refUp = useRef();
  const refUp2 = useRef();
  const refDown = useRef();
  const refDown2 = useRef();

  console.log("render todo list!");

  const authorId = useSelector(getSearchAuthorIdSelector);

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

  if (isLoading2) return <p>Loading authors...</p>;
  if (isError2) return <p>Error from author req is {error2}</p>;
  if (isLoading3) return <p>Loading loc...</p>;
  if (isError3) return <p>Error from loc req is {error3}</p>;

  const onClickSelectActive = () => {
    divRef.current.hidden = "hidden";
  };

  const onCLickDown = () => {
    if (select1Ref.current.hidden === true) {
      setIsFalse(false);
      refClose.current.hidden = false;
      refDown.current.hidden = true;
      refUp.current.hidden = false;
    } else if (select1Ref.current.hidden === false) {
      setIsFalse(true);
      refClose.current.hidden = true;
      refDown.current.hidden = false;
      refUp.current.hidden = true;
    }
  };

  const onCLickDown2 = () => {
    if (select2Ref.current.hidden === true) {
      setIsFalse2(false);
      refClose2.current.hidden = false;
      refDown2.current.hidden = true;
      refUp2.current.hidden = false;
    } else if (select2Ref.current.hidden === false) {
      setIsFalse2(true);
      refClose2.current.hidden = true;
      refDown2.current.hidden = false;
      refUp2.current.hidden = true;
    }
  };

  const onCLick = (e) => {
    const eventTarget = e.target.outerText;
    setIsAuthor(eventTarget);
  };

  const onClick2 = (e) => {
    const eventTarget = e.target.outerText;
    setIsLocation(eventTarget);
  };

  const onCLickClose = () => {
    setIsAuthor("Author");
    if (isLocation === "Location") {
      divRef.current.hidden = false;
    }
  };

  const onCLickClose2 = () => {
    setIsLocation("Location");
    if (isAuthor === "Author") {
      divRef.current.hidden = false;
    }
  };

  return (
    <>
      <div ref={divRef}></div>

      <div className={`${classes.selector}`}>
        <div onClick={onCLickDown} className={`${classes.selectField}`}>
          <p>{isAuthor}</p>

          <div className={`${classes.faDivs}`}>
            <div ref={refClose} hidden>
              <FontAwesomeIcon
                icon={faXmark}
                style={{
                  color: "#878787",
                  paddingRight: "10px",
                }}
                onClick={onCLickClose}
              />
            </div>
            <div ref={refDown}>
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{
                  color: "#878787",
                  paddingBottom: "1px",
                }}
                onClick={onCLickDown}
              />
            </div>
            <div ref={refUp} hidden>
              <FontAwesomeIcon
                icon={faCaretUp}
                fade
                style={{
                  color: "#878787",
                  paddingTop: "1px",
                }}
              />
            </div>
          </div>
        </div>
        <div
          ref={select1Ref}
          onClick={onClickSelectActive}
          className={`${classes.selectTag}`}
          hidden={isFalse}
        >
          {data2.map((d, i) => (
            <div onClick={onCLick} key={i} className={`${classes.optionTag}`}>
              {d.name}
            </div>
          ))}
        </div>
      </div>

      <div className={`${classes.selector}`}>
        <div onClick={onCLickDown2} className={`${classes.selectField}`}>
          <p>{isLocation}</p>
          <div className={`${classes.faDivs}`}>
            <div ref={refClose2} hidden>
              <FontAwesomeIcon
                icon={faXmark}
                style={{
                  color: "#878787",
                  paddingRight: "10px",
                }}
                onClick={onCLickClose2}
              />
            </div>
            <div ref={refDown2}>
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{
                  color: "#878787",
                  paddingBottom: "1px",
                }}
                onClick={onCLickDown2}
              />
            </div>
            <div ref={refUp2} hidden>
              <FontAwesomeIcon
                icon={faCaretUp}
                fade
                style={{
                  color: "#878787",
                  paddingTop: "1px",
                }}
              />
            </div>
          </div>
        </div>
        <div
          ref={select2Ref}
          onClick={onClickSelectActive}
          className={`${classes.selectTag}`}
          hidden={isFalse2}
        >
          {data3.map((d, i) => (
            <div onClick={onClick2} key={i} className={`${classes.optionTag}`}>
              {d.location}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
