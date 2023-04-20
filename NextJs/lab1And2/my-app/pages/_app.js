import { useEffect } from "react";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/navbar";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
  }, []);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
