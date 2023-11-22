import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import translate from "@/data/translate.json";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{translate["website-title"]}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
