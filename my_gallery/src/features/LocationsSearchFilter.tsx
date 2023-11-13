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
import axios from 'axios';
import { getCurrentTheme } from '../redux/slices/themeSlice.ts';
import classes from '../styles.module.css';
import '../MySearch2.css';

function LocationsSearchFilter() {
  const theme = useSelector(getCurrentTheme);

  const [isFalse2, setIsFalse2] = useState(true);
  const [isLocation, setIsLocation] = useState('Location');

  const refClose2 = useRef<HTMLDivElement>(null);
  const select2Ref = useRef<HTMLDivElement>(null);
  const refUp2 = useRef<HTMLDivElement>(null);
  const refDown2 = useRef<HTMLDivElement>(null);
  const refElInFlexContainer2 = useRef<HTMLDivElement>(null);

  interface ILocation {
    id: number,
    location: string
  }

  const {
    data: locations,
    isLoading: isLoading3,
    isError: isLocationsError,
    error: locationsError,
  } = useQuery<ILocation[]>({
    queryKey: ['GET_ALL_LOCATIONS'],
    queryFn: () => axios('https://test-front.framework.team/locations/').then((res) => res.data),
  });

  if (isLoading3) return <p>Loading loc...</p>;
  if (isLocationsError) {
    return (
      <p>
        Error from loc req is
        {' '}
        {locationsError.toString()}
      </p>
    );
  }

  const onCLickDown2 = () => {
    if (select2Ref.current?.hidden) {
      setIsFalse2(false);
      if (refClose2.current) refClose2.current.hidden = false;
      if (refDown2.current) refDown2.current.hidden = true;
      if (refUp2.current) refUp2.current.hidden = false;
      if (refElInFlexContainer2.current) refElInFlexContainer2.current.style.borderBottom = '1px solid gray';
    } else if (!select2Ref.current?.hidden) {
      setIsFalse2(true);
      if (refClose2.current) refClose2.current.hidden = true;
      if (refDown2.current) refDown2.current.hidden = false;
      if (refUp2.current) refUp2.current.hidden = true;
      if (refElInFlexContainer2.current) refElInFlexContainer2.current.style.borderBottom = 'none';
    }
  };

  const onClick2 = (e: MouseEvent<HTMLDivElement>) => {
    const eventTarget = (e.target as HTMLElement).outerText;
    setIsLocation(eventTarget);
  };

  const onCLickClose2 = () => {
    setIsLocation('Location');
  };

  return (
    <div className={`${classes.flexContainer}`}>
      <div
        ref={refElInFlexContainer2}
        onClick={onCLickDown2}
        className={`${classes.elInFlexContainer}`}
      >
        <p>{isLocation}</p>
        <div className={`${classes.faDivs}`}>
          <div ref={refClose2} hidden>
            <FontAwesomeIcon
              icon={faXmark}
              style={{
                color: '#878787',
                paddingRight: '10px',
              }}
              onClick={onCLickClose2}
            />
          </div>
          <div ref={refDown2}>
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{
                color: '#878787',
                paddingBottom: '1px',
              }}
              onClick={onCLickDown2}
            />
          </div>
          <div ref={refUp2} hidden>
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
      <div
        ref={select2Ref}
        className={`${classes.selectTag}`}
        hidden={isFalse2}
      >
        {locations?.map((location) => (
          <div
            onClick={onClick2}
            key={uuidv4()}
            className={`optionTag${theme === 'light' ? '' : 'Dark'}`}
          >
            {location.location}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LocationsSearchFilter;
