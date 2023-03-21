import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomePage from "../components/HomePage.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";
export default function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-155162916-1"
        ></script>
        <meta charset="utf-8" />
        <title>Alexis Ballo</title>
        <meta name="description" content="Check out Alexis' resume!" />
        <meta name="author" content="Alexis Ballo" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        <link rel="icon" href="/favicon.ico?v=2" type="image/x-icon" />
      </Helmet>
      <HomePage />
    </HelmetProvider>
  );
}
