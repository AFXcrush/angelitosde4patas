import LogoFB from "../assets/svg/FB-logo.svg";
import LogoInsta from "../assets/svg/Insta-logo.svg";

import styles from "../styles/Home.module.css";

export default function Footer({ color }) {
  return (
    <div className={color}>
      <section className={styles.footerRedesSection}>
        <LogoFB />
        <LogoInsta />
      </section>

      <section className={styles.footerInfo}>
        <p>
          ALBERGUE ANGELITOS DE 4 PATAS | 2022 TODOS LOS DERECHOS RESEVADOS
          <br></br>
          DESARROLLADO POR CARLOS CRUZ
        </p>
      </section>
    </div>
  );
}
