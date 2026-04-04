import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver'
import { platos, gastronomiaIntro } from '../../../data/gastronomia'
import { Divider } from '../../ui/Divider/Divider'
import styles from './Gastronomia.module.css'

export function Gastronomia() {
  const ref = useIntersectionObserver<HTMLElement>()

  return (
    <section id="gastronomia" className={styles.gastronomiaSection} ref={ref}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Gastronomía Ancestral</h2>
        <Divider />
        <p className={styles.gastronomyIntro}>{gastronomiaIntro}</p>
        <div className={styles.dishesGrid}>
          {platos.map((plato) => (
            <div key={plato.nombre} className={`${styles.dishCard} animateOnScroll`}>
              <div className={styles.dishIcon} aria-hidden="true">{plato.icono}</div>
              <h3 className={styles.dishName}>{plato.nombre}</h3>
              <p>{plato.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
