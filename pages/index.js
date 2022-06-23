import Layout from "../components/Layout";
import InfoSection from "../components/InfoSection";
import AngelitosSection from "../components/AngelitosSection";

import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Layout title={"Albergue Angelitos de 4 Patas: Inicio"}>
      <InfoSection />

      <AngelitosSection />

      <Footer color={styles.footer} />
    </Layout>
  );
}
