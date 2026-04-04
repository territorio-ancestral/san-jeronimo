import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver'
import { culturaItems } from '../../../data/cultura'
import { Divider } from '../../ui/Divider/Divider'
import styles from './Cultura.module.css'

export function Cultura() {
  const ref = useIntersectionObserver<HTMLElement>()

  return (
    <section id="cultura" className={styles.culturaSection} ref={ref}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Nuestra Cultura</h2>
        <Divider />
        <div className={styles.contentGrid}>
          {culturaItems.map((item) => (
            <div key={item.titulo} className={`${styles.contentCard} animateOnScroll`}>
              <div className={styles.cardIcon} aria-hidden="true">{item.icono}</div>
              <h3 className={styles.cardTitle}>{item.titulo}</h3>
              <p>{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
