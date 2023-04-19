import React from "react";
import Link from "next/link";

export default function gameId({ game }) {
  return (
    <div className="">
      <div className="card w-50 mx-auto mt-5">
        <img
          className="card-img-top"
          src={game.thumbnail}
          alt="Card image cap"
        />
        <div className="card-body">
          <p className="card-text">{game.short_description}</p>
          <Link href={`/home`} className="btn btn-primary">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { gameId: "1" } },
      { params: { gameId: "2" } },
      { params: { gameId: "3" } },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:8000/games/${params.gameId}`);
  const data = await res.json();
  return {
    props: {
      game: data,
    },
    revalidate: 10,
  };
}
