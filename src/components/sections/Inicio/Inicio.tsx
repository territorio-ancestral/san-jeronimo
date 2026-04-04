import styles from './Inicio.module.css'

export function Inicio() {
  return (
    <section id="inicio" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h2 className={styles.heroTitle}>Bienvenidos a Nuestro Territorio</h2>
        <p className={styles.heroText}>
          Somos guardianes de una tierra sagrada, donde la memoria de nuestros ancestros vive en
          cada montaña, río y sendero. Este es el territorio de San Jerónimo, Caldas, donde la
          tradición indígena se entrelaza con la naturaleza y el espíritu de nuestra gente.
        </p>
        <div className={styles.decorativeLine} aria-hidden="true" />
      </div>
    </section>
  )
}
