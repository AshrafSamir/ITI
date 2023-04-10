import { gql, useMutation, useQuery } from "@apollo/client";

let MutationDeleteAuthorQuery = gql`
  mutation ($id: String!) {
    DeleteAuthor(id: $id) {
      name
      age
    }
  }
`;

const Authors = ({ authors, setAuthors }) => {
  const [deleteNow, { error, data }] = useMutation(MutationDeleteAuthorQuery);
  const handleDelete = (id) => {
    deleteNow({ variables: { id } }).then(() => {
      setAuthors(authors.filter((a) => a.id !== id));
    });
  };

  // console.log({ authors });
  return (
    <div>
      <h1 className="alert alert-secondary w-50 m-auto text-center mb-2 mt-2">
        Authors
      </h1>
      {authors.length &&
        authors.map((a) => {
          return (
            <div
              key={a.id}
              className="alert alert-info w-75 m-auto text-center"
            >
              <h5>Author: {a.name}</h5>
              <h5>Age: {a.age}</h5>
              <h5>Books: {a.books?.map((b) => b.name).join(", ")}</h5>
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  handleDelete(a.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Authors;

/**
 * 1- gql Query {students{name}}
 * 2- Connect With Link
 */
