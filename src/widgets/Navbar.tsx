import classes from '../styles.module.css';
import MySearch from '../MySearch';
import { MySearch2 } from '../MySearch2';
import MySearch3 from '../MySearch3';

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
