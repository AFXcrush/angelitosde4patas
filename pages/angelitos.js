import Image from "next/image";
import Layout from "../components/Layout";

import Huella1 from "../assets/svg/huellas-01.svg";
import Huella2 from "../assets/svg/huellas-02.svg";

import angelitos from "../pages/api/angelitos.json";

import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";

export default function Angelitos() {
  return (
    <Layout title={"Los Angelitos"}>
      <main className={styles.angelitosContainer}>
        <div className={styles.huellas}>
          <Huella1 className={styles.huella1} />

          <Huella2 className={styles.huella2} />
        </div>

        <div className={styles.angelitos}>
          <h1>Los angelitos</h1>

          <div className={styles.angelitosItemsContainer}>
            {angelitos.map((a, index) => {
              return (
                <div key={index} className={styles.angelitosItem}>
                  <div className={styles.angelitosItemNombre}>
                    <p>{a.nombre}</p>
                  </div>

                  <div className={styles.angelitosFotoContainer}>
                    <Image
                      src={a.foto}
                      alt={"foto de " + a.nombre}
                      width={189}
                      height={252}
                      className={styles.angelitosFoto}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
}
