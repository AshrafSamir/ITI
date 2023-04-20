import React from "react";
import Form from "@/components/Form";

export default function UpdateGame({ game }) {
  // get params from url

  return <Form formType={"update"} game={game} />;
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
  const res = await fetch(`http://localhost:3000/api/games/${params.gameId}`);
  const data = await res.json();
  return {
    props: {
      game: data,
    },
    revalidate: 10,
  };
}
