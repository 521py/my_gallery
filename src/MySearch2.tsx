/* eslint-disable import/prefer-default-export */
import AuthorsSearchFilter from './features/AuthorsSearchFilter.tsx';
import LocationsSearchFilter from './features/LocationsSearchFilter.tsx';
import './MySearch2.css';

export function MySearch2() {
  return (
    <>
      <AuthorsSearchFilter />
      <LocationsSearchFilter />
    </>
  );
}
