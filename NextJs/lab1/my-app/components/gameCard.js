import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function GameCard({ game }) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top "
          src={game.thumbnail}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{game.title}</h5>
          <p className="card-text">{game.short_description}</p>
          <Link href={`/home/${game.id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
