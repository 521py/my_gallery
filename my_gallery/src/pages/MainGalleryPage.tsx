import { useSelector } from 'react-redux';
import { getCurrentTheme } from '../redux/slices/themeSlice.ts';
import Header from '../widgets/Header.tsx';
import Navbar from '../widgets/Navbar.tsx';
import { Paints } from '../Paints.tsx';
import { Pagination } from '../Pagination.tsx';
import { PaginationDark } from '../PaginationDark.tsx';

function MainGalleryPage() {
  const theme = useSelector(getCurrentTheme);

  return (
    <div className={theme}>
      <Header />
      <Navbar />
      <Paints />
      {theme === 'light' ? <Pagination /> : <PaginationDark />}
    </div>
  );
}

export default MainGalleryPage;
