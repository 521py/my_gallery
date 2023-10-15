import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MySearch from "./MySearch";
import MySearch2 from "./MySearch2";
import SomeSelectAuthor from "./SomeSelectAuthor";
import SomeSelectLocation from "./SomeSelectLocation";
import { TodoList } from "./TodoList";
import classes from "./selectField.module.css";
import { Paints } from "./Paints";
import { Pagination } from "./Pagination";

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
      <div className={`${classes.header}`}>
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
