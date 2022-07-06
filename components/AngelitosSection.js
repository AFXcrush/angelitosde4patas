import Image from "next/image";
import Link from "next/link";
// import client from "../libs/apollo";
// import { PERRITOS } from "../graphql/perritos";
import BottomBannerBig from "../assets/svg/bottom-banner-big.svg";
import BottomBannerShort from "../assets/svg/bottom-banner-short.svg";
import HuellaGrande from "../assets/svg/Huella-grande.svg";

import angelitos from "../pages/api/angelitos.json";

import styles from "../styles/Home.module.css";

export default function AngelitosSection() {
  // const randomPerritos = [...angelitos].sort(() => 0.5 - Math.random());

  // let selectedRandom = randomPerritos.slice(0, 3);

  return (
    <div className={styles.angelitosSectionContainer}>
      <HuellaGrande className={styles.huellaGrande} />

      <BottomBannerBig className={styles.bottomBannerBigAngelitosSection} />

      <div className={styles.angelitosSection}>
        <section className={styles.fotoBurbuja}>
          <Image
            src="https://res.cloudinary.com/afximagesection/image/upload/v1654024939/AlbergueA4P/burbuja-perrito_y77sww.png"
            alt="Burbuja de perrito tomándose una selfie"
            width={679}
            height={657}
            className={styles.burbujaPerrito}
          />
        </section>

        <section className={styles.infoAngelitos}>
          <h1>Conoce a los Angelitos</h1>

          <p>
            Cada angelito del albergue tiene su propia historia. Conócelos y
            anímate apadrinando a alguno de ellos.
          </p>

          {/* <div className={styles.angelitosRandom}>
          {perritos?.map((p) => (
            <div key={p.id} className={styles.perrituContainer}>
              <div className={styles.perrituFotoContainer}>
                <Image
                  src={p.foto.url}
                  alt={p.nombre}
                  width={378}
                  height={504}
                  className={styles.perrituFoto}
                />
              </div>

              <div>
                <p className={styles.perrituNombre}>{p.nombre}</p>
                <p className={styles.perrituEdad}>{p.edad_estimada}</p>
              </div>
            </div>
          ))}
        </div> */}

          <div className={styles.angelitosListContainer}>
            {angelitos?.slice(0, 3).map((a) => (
              <div key={a.id} className={styles.angelitosRandom}>
                <div className={styles.perrituFotoContainer}>
                  <Image
                    src={a.foto}
                    alt={a.nombre}
                    width={189}
                    height={252}
                    className={styles.perrituFoto}
                  />
                </div>

                <div className={styles.perritusThumbnails}>
                  <p className={styles.perrituInfoNombre}>{a.nombre}</p>
                  <p className={styles.perrituInfoEdad}>{a.edad} años</p>
                </div>
              </div>
            ))}
          </div>

          <button>
            <Link href={"/angelitos"}>
              <a>CONOCER A TODOS</a>
            </Link>
          </button>
        </section>
      </div>

      <div className={styles.bottomBannerWhiteContainer}>
        <BottomBannerBig
          className={styles.bottomBannerBigAngelitosSectionWhite}
        />
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: PERRITOS,
//   });

//   return {
//     props: {
//       perritos: data?.perritos,
//     },
//   };
// }
