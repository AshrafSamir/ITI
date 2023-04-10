import { useEffect, useState } from "react";
import AddAuthor from "./Components/AddAuthor";
import Authors from "./Components/Authors";
import Books from "./Components/Books";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
const GetAllAuthorsQuery = gql`
  {
    authors {
      id
      name
      age
      books {
        name
      }
    }
  }
`;

const GetAllBooksQuery = gql`
  {
    books {
      id
      name
      numOfPages
      author
    }
  }
`;
function App() {
  const apiAuthors = useQuery(GetAllAuthorsQuery);

  const apiBooks = useQuery(GetAllBooksQuery);

  const [allAuthors, setAuthors] = useState([]);
  const [books, setAllBooks] = useState();

  useEffect(() => {
    if (apiAuthors.data) {
      setAuthors(apiAuthors.data.authors);
    }
    if (apiBooks.data) {
      setAllBooks(apiBooks.data.books);
    }
  }, [apiAuthors, apiAuthors.data, apiBooks, apiBooks.data]);

  return (
    <div>
      <Authors authors={allAuthors} setAuthors={setAuthors} />
      <Books books={books} authors={allAuthors} />
      <AddAuthor setAuthors={setAuthors} />
    </div>
  );
}

export default App;
