import GameCard from "@/components/gameCard";
import React from "react";

export default function index({ games }) {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {games ? (
          games.map((game) => (
            <GameCard game={game} key={game.id} className="col-md-3 " />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/games`);
  const data = await res.json();
  return {
    props: {
      games: data,
    },
    revalidate: 10,
  };
}
