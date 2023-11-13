/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useQuery } from '@tanstack/react-query';
import { MouseEvent, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faXmark,
  faCaretUp,
} from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import { getCurrentTheme } from '../redux/slices/themeSlice.ts';
import { getSearchAuthorIdSelector } from '../redux/slices/filterSlice.ts';
import { getQueryKeyForAuthorId } from '../utils.ts';
import classes from '../styles.module.css';
import '../MySearch2.css';

function AuthorsSearchFilter() {
  const theme = useSelector(getCurrentTheme);
  const authorId = useSelector(getSearchAuthorIdSelector);

  const [isFalse, setIsFalse] = useState(true);
  const [isAuthor, setIsAuthor] = useState('Author');

  const select1Ref = useRef<HTMLDivElement>(null);
  const refClose = useRef<HTMLDivElement>(null);
  const refUp = useRef<HTMLDivElement>(null);
  const refDown = useRef<HTMLDivElement>(null);
  const refElInFlexContainer1 = useRef<HTMLDivElement>(null);

  interface IAuthor {
    'id': number,
    'name': string
  }

  const {
    data: authors,
    isLoading: isAuthorLoading,
    isError: isAuthorError,
    error: authorError,
  } = useQuery<IAuthor[]>({
    queryKey: getQueryKeyForAuthorId(authorId),
    queryFn: () => fetch(`https://test-front.framework.team/authors/${authorId}`).then(
      (res) => res.json(),
    ),
  });

  if (isAuthorLoading) return <p>Loading authors...</p>;
  if (isAuthorError) {
    return (
      <p>
        Error from author req is
        {' '}
        {authorError.toString()}
      </p>
    );
  }

  const onCLickDown = () => {
    if (select1Ref.current?.hidden) {
      setIsFalse(false);
      if (refClose.current) refClose.current.hidden = false;
      if (refDown.current) refDown.current.hidden = true;
      if (refUp.current) refUp.current.hidden = false;
      if (refElInFlexContainer1.current) refElInFlexContainer1.current.style.borderBottom = '1px solid gray';
    } else if (!select1Ref.current?.hidden) {
      setIsFalse(true);
      if (refClose.current) refClose.current.hidden = true;
      if (refDown.current) refDown.current.hidden = false;
      if (refUp.current) refUp.current.hidden = true;
      if (refElInFlexContainer1.current) refElInFlexContainer1.current.style.borderBottom = 'none';
    }
  };

  const onCLick = (e: MouseEvent<HTMLDivElement>) => {
    const eventTarget = (e.target as HTMLDivElement).outerText;
    setIsAuthor(eventTarget);
  };

  const onCLickClose = () => {
    setIsAuthor('Author');
  };

  return (
    <div className={`${classes.flexContainer}`}>
      <div className={`${classes.middleFlexElement}`}>
        <div
          ref={refElInFlexContainer1}
          onClick={onCLickDown}
          className={`${classes.elInFlexContainer}`}
        >
          <p>{isAuthor}</p>

          <div className={`${classes.faDivs}`}>
            <div ref={refClose} hidden>
              <FontAwesomeIcon
                icon={faXmark}
                style={{
                  color: '#878787',
                  paddingRight: '10px',
                }}
                onClick={onCLickClose}
              />
            </div>
            <div ref={refDown}>
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{
                  color: '#878787',
                  paddingBottom: '1px',
                }}
                onClick={onCLickDown}
              />
            </div>
            <div ref={refUp} hidden>
              <FontAwesomeIcon
                icon={faCaretUp}
                fade
                style={{
                  color: '#878787',
                  paddingTop: '1px',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={select1Ref}
        className={`${classes.selectTag}`}
        hidden={isFalse}
      >
        {authors?.map((author) => (
          <div
            onClick={onCLick}
            key={uuidv4()}
            className={`optionTag${theme === 'light' ? '' : 'Dark'}`}
          >
            {author.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AuthorsSearchFilter;
