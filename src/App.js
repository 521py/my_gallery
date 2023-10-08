import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useState } from "react";
// import AsyncSelect from "react-select/async";
import SomeSelectAuthor from "./SomeSelectAuthor";
import SomeSelectAuthor2 from "./SomeSelectAuthor2";
import SomeSelectLocation from "./SomeSelectLocation";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NamedSearch />
      <SomeSelectAuthor />
      <SomeSelectAuthor2 />
      <SomeSelectLocation />
      <Example />
    </QueryClientProvider>
  );
}

function NamedSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://test-front.framework.team/paintings").then((res) =>
        res.json()
      ),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {data.length ? (
        data
          .filter((val) => {
            if (searchTerm === "") {
              return;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div key={key}>
                <p>{val.name}</p>
              </div>
            );
          })
      ) : (
        <div>No found anything by NamedSearch</div>
      )}
    </>
  );
}

function Example() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://test-front.framework.team/paintings").then((res) =>
        res.json()
      ),
  });

  console.log(data); // data это массив из Объектов у нас

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  data.forEach((element) => {
    console.log(element);
    // return element;
  });

  return (
    <div>
      {data.length
        ? data.map((paint) => (
            <div key={paint.id}>
              <h1>{paint.authorId}</h1>
              <p>{paint.created}</p>
              <strong>👀 {paint.id}</strong>{" "}
              <strong>✨ {paint.locationId}</strong>{" "}
              <strong>🍴 {paint.name}</strong>
              <img src={paint.imageUrl} alt="paint"></img>
            </div>
          ))
        : data.forEach((element) => {
            <div>
              <h2>element.created</h2>
            </div>;
          })}
    </div>
  );
}

export default App;
