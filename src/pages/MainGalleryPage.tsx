import { useSelector } from 'react-redux';
import { getCurrentTheme } from '../redux/slices/themeSlice';
import Header from '../widgets/header';
import Navbar from '../widgets/navbar';
import { Paints } from '../Paints';
import { Pagination } from '../Pagination';
import { PaginationDark } from '../PaginationDark';

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
