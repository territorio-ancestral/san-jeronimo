import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver'
import { instrumentos, musicaIntro } from '../../../data/musica'
import { Divider } from '../../ui/Divider/Divider'
import styles from './Musica.module.css'

export function Musica() {
  const ref = useIntersectionObserver<HTMLElement>()

  return (
    <section id="musica" className={styles.musicaSection} ref={ref}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Nuestra Música</h2>
        <Divider />
        <p className={styles.musicIntro}>{musicaIntro}</p>
        <div className={styles.instrumentsGrid}>
          {instrumentos.map((instrumento) => (
            <div key={instrumento.nombre} className={`${styles.instrumentCard} animateOnScroll`}>
              <div className={styles.instrumentIcon} aria-hidden="true">{instrumento.icono}</div>
              <h3 className={styles.instrumentName}>{instrumento.nombre}</h3>
              <p>{instrumento.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
