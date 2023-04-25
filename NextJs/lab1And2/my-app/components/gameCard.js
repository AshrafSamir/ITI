import React from "react";
import Link from "next/link";

export default function GameCard({ game }) {
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:3000/api/games/${game._id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="card m-3 p-0" style={{ width: "18rem" }}>
      <img
        className="card-img-top "
        src={game.thumbnail}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{game.title}</h5>
        <p className="card-text">{game.short_description}</p>

        <Link
          href={`/home/${game._id}`}
          className="btn  mx-1"
          style={{ backgroundColor: "#9BA4B5", color: "white" }}
        >
          Details <i class="fa-solid fa-circle-info"></i>
        </Link>
        <Link
          href={`/home/updategame/${game._id}`}
          className="btn mx-1"
          style={{ backgroundColor: "#212A3E", color: "white" }}
        >
          Update <i class="fa-solid fa-pen"></i>
        </Link>

        <Link
          href={`/home`}
          onClick={handleDelete}
          className="btn btn-danger mt-1 mx-1"
        >
          Delete <i class="fa-sharp fa-solid fa-trash"></i>
        </Link>
      </div>
    </div>
  );
}
