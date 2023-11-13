import Avatar from '../features/Avatar.tsx';
import ThemeHandler from '../features/ThemeHandler.tsx';
import classes from '../styles.module.css';
import '../App.css';

function Header() {
  return (
    <div className={`${classes.header1}`}>
      <Avatar />
      <ThemeHandler />
    </div>
  );
}

export default Header;
