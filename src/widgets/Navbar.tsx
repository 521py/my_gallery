import classes from '../styles.module.css';
import MySearch from '../MySearch.tsx';
import { MySearch2 } from '../MySearch2.tsx';
import MySearch3 from '../MySearch3.tsx';

function Navbar() {
  return (
    <div className={`${classes.header2}`}>
      <MySearch />
      <MySearch2 />
      <MySearch3 />
    </div>
  );
}

export default Navbar;
