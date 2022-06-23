import IconBook from "../assets/svg/icon-book.svg";
import IconController from "../assets/svg/icon-controller.svg";
import IconShopping from "../assets/svg/icon-bag.svg";
import BottomBannerBig from "../assets/svg/bottom-banner-big.svg";
import BottomBannerShort from "../assets/svg/bottom-banner-short.svg";

import styles from "../styles/Home.module.css";

const contenido = [
  {
    svg: [<IconBook />],
    titulo: `"Los días de Frida"`,
    desc: "Cómic del día a día de Frida, una perrita de edad avanzada que vive en el albergue y comparte su día con sus hermanos perros y los humanos que los cuidan.",
  },
  {
    svg: [<IconController />],
    titulo: `"La ciudad y los perritos"`,
    desc: "Juego RPG en el que tienes que ayudar a Reina, una de las perritas recientes del albergue, a encontrar a todos los perritos dispersos en la ciudad de Lima.",
  },
  {
    svg: [<IconShopping />],
    titulo: "Merch y regalos",
    desc: "Puedes colaborar con el albergue comprando la mercadería que ofrecemos. Todo el dinero recaudado será destinado al mantenimiento del albergue.",
  },
];

export default function ProyectoContenido() {
  return (
    <div className={styles.proyectoContenidoContainer}>
      <BottomBannerBig className={styles.bottomBannerBigAngelitosSection} />

      <section className={styles.proyectoContenido}>
        <h1>+ CONTENIDO</h1>

        <div className={styles.contenidoList}>
          {contenido.map((c, index) => {
            return (
              <div key={index} className={styles.contenidoItem}>
                {c.svg[0]}
                <h2>{c.titulo}</h2>
                <p>{c.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <div className={styles.bottomBannerWhiteContainer}>
        <BottomBannerBig
          className={styles.bottomBannerBigAngelitosSectionWhite}
        />
      </div>
    </div>
  );
}
