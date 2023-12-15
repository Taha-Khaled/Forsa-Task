import { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      {/* <Header /> */}
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
