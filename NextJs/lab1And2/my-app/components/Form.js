import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Form({ formType, game }) {
  const [title, setTitle] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [shortDescription, setShortDescription] = useState();
  const [errorClass, setErrorClass] = useState("text-muted");
  useEffect(() => {
    if (formType === "update") {
      const str = game.thumbnail;
      const regex = /\/(\d+)\//g;

      let match;
      let thumbnailNumber;
      while ((match = regex.exec(str))) {
        thumbnailNumber = match[1];
      }
      setThumbnail(thumbnailNumber);
      setTitle(game.title);
      setShortDescription(game.short_description);
    }
  }, []);
  const handleAddGame = async () => {
    const game = {
      title: title,
      thumbnail: `https://www.freetogame.com/g/${thumbnail}/thumbnail.jpg`,
      short_description: shortDescription,
    };
    await fetch("http://localhost:3000/api/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game),
    });
  };
  const handleUpdateGame = async () => {
    const newgamedata = {
      title: title,
      thumbnail: `https://www.freetogame.com/g/${thumbnail}/thumbnail.jpg`,
      short_description: shortDescription,
    };
    await fetch(`http://localhost:3000/api/games/${game._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newgamedata),
    });
  };

  return (
    <div className="container mt-3">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Thumbnail number
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="https://www.freetogame.com/g/540/thumbnail.jpg"
          max={550}
          min={1}
          value={thumbnail}
          onChange={(e) => {
            if (e.target.value > 550 || e.target.value < 1) {
              setErrorClass("text-danger");
            } else {
              setErrorClass("text-muted");
              setThumbnail(e.target.value);
            }
          }}
        />
        <div id="passwordHelpBlock" class={`form-text ${errorClass}`}>
          Thumbnail number is the number in the url of the thumbnail image.
          Should be between 1 to 550
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Short description
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        ></textarea>
      </div>
      <Link
        href="/home"
        type="button"
        class="btn "
        style={{ backgroundColor: "#212A3E", color: "white" }}
        onClick={formType == "add" ? handleAddGame : handleUpdateGame}
      >
        {formType == "add" ? "Add game" : "Update game"}
      </Link>
    </div>
  );
}
