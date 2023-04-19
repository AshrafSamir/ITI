import GameCard from "@/components/gameCard";
import React from "react";

export default function index({ games }) {
  return (
    <div className="container m-5">
      <div className="row">
        {games.map((game) => (
          <div key={game.id} className="col-md-3">
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:8000/games`);
  const data = await res.json();
  console.log({ data });
  return {
    props: {
      games: data,
    },
    revalidate: 10,
  };
}
