import React from "react";
import Form from "@/components/Form";
import { getSession } from "next-auth/react";

export default function AddGame() {
  return <Form formType={"add"} />;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackurl=http://localhost:3000/home/addgame`,
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
