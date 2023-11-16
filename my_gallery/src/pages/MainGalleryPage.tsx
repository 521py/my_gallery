import { useSelector } from 'react-redux';
import { getCurrentTheme } from '../redux/slices/themeSlice.ts';
import Header from '../widgets/Header.tsx';
import Navbar from '../widgets/Navbar.tsx';
import { Paints } from '../Paints.tsx';
import { Pagination } from '../Pagination.tsx';
import { PaginationDark } from '../PaginationDark.tsx';
import classes from '../styles.module.scss';
import '../App.scss';

function MainGalleryPage() {
  const theme = useSelector(getCurrentTheme);

  return (
    <div className={theme}>
      <div className={`${classes.wrapper}`}>
        <div className={`${classes.headers}`}>
          <Header />
          <Navbar />
        </div>
        <Paints />
        {theme === 'light' ? <Pagination /> : <PaginationDark />}
      </div>
    </div>
  );
}

export default MainGalleryPage;
