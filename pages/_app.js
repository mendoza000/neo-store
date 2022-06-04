import "normalize.css";
import "animation.css";
import "@styles/globals.scss";
import Head from "next/head";
import Layout from "@components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NeoStore</title>
        <link rel="shortcut icon" href={"/neoStore.svg"} type="image/x-icon" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
