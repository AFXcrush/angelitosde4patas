import styles from "../styles/Home.module.css";

export default function ProyectoInfo() {
  return (
    <section className={styles.proyectoInfo}>
      <h1>Proyecto</h1>

      <iframe
        src="https://www.youtube.com/embed/yGTbMGzEuPo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <p className={styles.titulo}>"Angelitos de 4 patas" el documental</p>

      <p className={styles.descripcion}>
        En el albergue "Angelitos de 4 patas" hay 23 perritos de avanzada edad
        que dependen de los cuidados de bondadosas personas que hacen todo lo
        posible para mantenerlos con sus propios recursos. El día a día de
        atenciones en el albergue y la constante búsqueda de ayuda comuninataria
        son la principal preocupación de Diana y Janet, las fundadoras del
        lugar, que lo dan todo por sus angelitos caninos.
      </p>
    </section>
  );
}
