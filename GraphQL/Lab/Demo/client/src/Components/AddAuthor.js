import { gql, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";

let MutationAddAuthorQuery = gql`
  mutation ($name: String!, $age: Int!) {
    AddAuthor(name: $name, age: $age) {
      name
      age
    }
  }
`;

function AddAuthor({ setAuthors }) {
  let [name, setName] = useState("");
  let [age, setAge] = useState(0);

  let [saveNow, { error, data }] = useMutation(MutationAddAuthorQuery, {
    variables: {
      name: name,
      age: +age,
    },
  });

  const handleAdd = (Author) => {
    saveNow().then((data) => {
      console.log(data.data.AddAuthor);
      setAuthors((prev) => [...prev, Author]);
    });
  };

  let SubmitingForm = (e) => {
    e.preventDefault();
    let Author = {
      name: name,
      age: age,
    };
    handleAdd(Author);
  };

  return (
    <div className="m-2">
      <h1 className="alert alert-secondary w-50 m-auto text-center mb-2 mt-2">
        Add New Author
      </h1>
      <form className="form" onSubmit={SubmitingForm}>
        <div className="m-1 form-group d-flex justify-content-center">
          <label className="col-3">Name: </label>
          <input
            type="text"
            className="form-control"
            onInput={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="m-1 form-group d-flex justify-content-center">
          <label className="col-3">Age: </label>
          <input
            type="number"
            className="form-control"
            onInput={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="m-1 form-group d-flex justify-content-center">
          <input type="submit" className="btn btn-outline-success" />
        </div>
      </form>
    </div>
  );
}

export default AddAuthor;
