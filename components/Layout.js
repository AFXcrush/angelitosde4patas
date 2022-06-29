import Head from "next/head";
import Script from "next/script";

import styles from "../styles/Home.module.css";
import MenuBar from "./MenuBar";

export default function Layout({ title, children }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>

        <meta
          name="Albergue Angelitos de 4 Patas"
          content="Página web del albergue de perros 'Angelitos de 4 Patas' ubicado en S.M.P. Lima, Perú"
        ></meta>

        <link rel="icon" href="/favicon.ico" />

        {/* GOOGLE ANALYTICS */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JCR5Q5BWZW"
          strategy="afterInteractive"
          async
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JCR5Q5BWZW');
        `}
        </Script>
      </Head>

      <MenuBar />

      {children}
    </div>
  );
}
