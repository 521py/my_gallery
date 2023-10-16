import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MySearch from "./MySearch";
import MySearch2 from "./MySearch2";
import { TodoList } from "./TodoList";
import classes from "./selectField.module.css";
import { Paints } from "./Paints";
import { Pagination } from "./Pagination";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown, faSun } from "@fortawesome/free-solid-svg-icons";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${classes.header1}`}>
        <FontAwesomeIcon icon={faCircle} color="whitesmoke" size="2xl" />
        <FontAwesomeIcon icon={faSun} />
      </div>

      <div className={`${classes.header2}`}>
        <MySearch />
        <TodoList />
        <MySearch2 />
      </div>
      <Paints />
      <Pagination />
    </QueryClientProvider>
  );
}

export default App;
