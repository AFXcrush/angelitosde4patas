import Head from "next/head";

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
      </Head>

      <MenuBar />

      {children}
    </div>
  );
}
