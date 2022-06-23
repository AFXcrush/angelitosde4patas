import Footer from "../components/Footer";
import Layout from "../components/Layout";

import Huella1 from "../assets/svg/huellas-01.svg";
import Huella2 from "../assets/svg/huellas-02.svg";

import styles from "../styles/Home.module.css";
import ProyectoInfo from "../components/ProyectoInfo";
import ProyectoContenido from "../components/ProyectoContenido";

export default function Proyecto() {
  return (
    <Layout title={"Proyecto"}>
      <main className={styles.proyectoContainer}>
        <div className={styles.huellas}>
          <Huella1 className={styles.huella1} />

          <Huella2 className={styles.huella2} />
        </div>

        <div className={styles.proyecto}>
          <ProyectoInfo />

          <ProyectoContenido />
        </div>
      </main>
      <Footer color={styles.footer} />
    </Layout>
  );
}
