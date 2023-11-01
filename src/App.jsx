import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MySearch from './MySearch';
import { MySearch2 } from './MySearch2';
import MySearch3 from './MySearch3';
import classes from './styles.module.css';
import { Paints } from './Paints';
import { Pagination } from './Pagination';
import { PaginationDark } from './PaginationDark';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentTheme, set } from './redux/slices/themeSlice';
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const theme = useSelector(getCurrentTheme);
  const dispatch = useDispatch();

  const onClickChangeTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    console.log(theme);
    dispatch(set(next));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className={theme}>
        <div className={`${classes.header1}`}>
          <FontAwesomeIcon icon={faCircle} color='whitesmoke' size='2xl' />
          <svg
            onClick={onClickChangeTheme}
            xmlns='http://www.w3.org/2000/svg'
            width='26'
            height='26'
            fill='currentColor'
            className='bi bi-sun'
            viewBox='0 0 16 16'
          >
            <path d='M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z' />
          </svg>
        </div>
        <div className={`${classes.header2}`}>
          <MySearch />
          <MySearch2 />
          <MySearch3 />
        </div>
        <Paints />
        {theme === 'light' ? <Pagination /> : <PaginationDark />}
      </div>
    </QueryClientProvider>
  );
}

export default App;
