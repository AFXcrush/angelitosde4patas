import classNames from "classnames";

import AngelitosLogoFull from "../assets/svg/Angelitos-de-4-patas-logo-full-2.svg";
import Huella1 from "../assets/svg/huellas-01.svg";
import Huella2 from "../assets/svg/huellas-02.svg";

import styles from "../styles/Home.module.css";

export default function InfoSection() {
  return (
    <div className={styles.infoSection}>
      <div className={styles.huellas}>
        <Huella1 className={styles.huella1} />

        <Huella2 className={styles.huella2} />
      </div>

      <div className={styles.indexContent}>
        <AngelitosLogoFull className={styles.angelitosLogoFull} />

        <div className={styles.banners}>
          <section className={styles.bannerInfo}>
            <p>
              {" "}
              <strong>Albergue de perritos</strong> rescatados y cuidados por un
              pequeño equipo de amantes de los animales. Ubicado en el distrito
              de San Martín de Porres de Lima, Perú.
            </p>
          </section>

          <section className={styles.bannerApoyo}>
            <p className={styles.parrafoApoyo}>
              Actualmente el albergue necesita de apoyo y colaboración, pues la
              mayoría de angelitos son de avanzada edad y/o necesitan atención
              médica,
            </p>

            <div className={styles.apoyoOptions}>
              <div
                className={classNames(styles.apoyoOption, styles.apoyoOption1)}
              >
                donar
              </div>
              <div className={styles.apoyoOption}>apadrinar</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
