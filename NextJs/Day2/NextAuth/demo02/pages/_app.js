import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/commponents/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

export default function App({
  Component,
  //? 2
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    //? 1
    <SessionProvider session={session}>
      <div className="container">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
