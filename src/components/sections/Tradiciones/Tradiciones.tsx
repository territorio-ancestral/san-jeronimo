import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver'
import { tradiciones } from '../../../data/tradiciones'
import { Divider } from '../../ui/Divider/Divider'
import styles from './Tradiciones.module.css'

export function Tradiciones() {
  const ref = useIntersectionObserver<HTMLElement>()

  return (
    <section id="tradiciones" className={styles.tradicionesSection} ref={ref}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Tradiciones Vivas</h2>
        <Divider />
        <div className={styles.traditionsGrid}>
          {tradiciones.map((tradicion) => (
            <div key={tradicion.titulo} className={`${styles.traditionItem} animateOnScroll`}>
              <div className={styles.traditionHeader}>
                <span className={styles.traditionIcon} aria-hidden="true">{tradicion.icono}</span>
                <h3 className={styles.traditionTitle}>{tradicion.titulo}</h3>
              </div>
              <p>{tradicion.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
