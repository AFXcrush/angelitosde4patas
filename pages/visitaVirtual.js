import Layout from "../components/Layout";
import Image from "next/image";

import Footer from "../components/Footer";

import BottomBannerBig from "../assets/svg/bottom-banner-big.svg";
import BottomBannerShort from "../assets/svg/bottom-banner-short.svg";

import styles from "../styles/Home.module.css";

export default function VisitaVirtual() {
  return (
    <Layout>
      <main className={styles.visitaVirtualContainer}>
        <div className={styles.visitaVirtual}>
          <h1>Visita virtual del albergue</h1>

          <Image
            src="https://res.cloudinary.com/afximagesection/image/upload/v1655888966/AlbergueA4P/Visitavirtual360_eqxral.jpg"
            alt="Frame de visita virtual 360"
            width={1920}
            height={909}
            className={styles.visitaVirtualImg}
          />
        </div>
      </main>

      <BottomBannerBig
        className={styles.bottomBannerBigAngelitosSectionColor}
      />

      <Footer color={styles.footercolor} />
    </Layout>
  );
}
