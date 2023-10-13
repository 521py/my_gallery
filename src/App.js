import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MySearch from "./MySearch";
import MySearch2 from "./MySearch2";
import SomeSelectAuthor from "./SomeSelectAuthor";
import SomeSelectLocation from "./SomeSelectLocation";
import { TodoList } from "./TodoList";

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
      <MySearch />
      <MySearch2 />
      <TodoList />
      {/* <TodoList2 /> */}
      {/* <SomeSelectAuthor /> */}
    </QueryClientProvider>
  );
}

export default App;
