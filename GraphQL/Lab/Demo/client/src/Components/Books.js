function Books({ books, authors }) {
  let RenderBooks = () => {
    console.log({ books });

    if (books) {
      if (books.length) {
        return books.map((b) => {
          return (
            <div
              key={b.id}
              className="alert alert-info w-75 m-auto text-center"
            >
              <h5>Books: {b.name}</h5>
              <h5>
                Author:
                {authors.map((author) => {
                  if (author?.id === b.author) {
                    console.log(author.name);
                    return " " + author.name;
                  }
                  return null;
                })}
              </h5>
            </div>
          );
        });
      } else {
        return <div>Loading...</div>;
      }
    } else {
      return <div>No Content</div>;
    }
  };
  return (
    <div>
      <h1 className="alert alert-secondary w-50 m-auto text-center mb-2 mt-2">
        Books
      </h1>
      {RenderBooks()}
    </div>
  );
}

export default Books;
