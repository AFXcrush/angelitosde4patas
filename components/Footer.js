import LogoFB from "../assets/svg/FB-logo.svg";
import LogoInsta from "../assets/svg/Insta-logo.svg";

import styles from "../styles/Home.module.css";

export default function Footer({ color }) {
  return (
    <div className={color}>
      <section className={styles.footerRedesSection}>
        <a
          href="https://www.facebook.com/Angelitos-de-4-patas-113880594655011"
          target="_blank"
          rel="noreferrer"
        >
          <LogoFB />
        </a>

        <a
          href="https://www.instagram.com/bonelliprodu/"
          target="_blank"
          rel="noreferrer"
        >
          <LogoInsta />
        </a>
      </section>

      <section className={styles.footerInfo}>
        <p>
          ALBERGUE ANGELITOS DE 4 PATAS | 2022 TODOS LOS DERECHOS RESERVADOS
          <br></br>
          DESARROLLADO POR CARLOS CRUZ
        </p>
      </section>
    </div>
  );
}
