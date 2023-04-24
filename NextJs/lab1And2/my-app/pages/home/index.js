import GameCard from "@/components/GameCard";
import React from "react";
import { getSession } from "next-auth/react";

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

// export async function getStaticProps() {
//   const res = await fetch(`http://localhost:3000/api/games`);
//   const data = await res.json();
//   return {
//     props: {
//       games: data,
//     },
//     revalidate: 10,
//   };
// }

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/games`);
  const data = await res.json();
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackurl=http://localhost:3000/home`,
        permanent: false,
      },
    };
  }
  return {
    props: {
      games: data,
    },
  };
}
