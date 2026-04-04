import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver'
import { eventos } from '../../../data/eventos'
import { Divider } from '../../ui/Divider/Divider'
import styles from './Eventos.module.css'

export function Eventos() {
  const ref = useIntersectionObserver<HTMLElement>()

  return (
    <section id="eventos" className={styles.eventosSection} ref={ref}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Calendario de Eventos</h2>
        <Divider />
        <div className={styles.eventsTimeline}>
          {eventos.map((evento) => (
            <div key={evento.titulo} className={`${styles.eventItem} animateOnScroll`}>
              <div className={styles.eventDate}>
                <span className={styles.month}>{evento.mes}</span>
                <span className={styles.day}>{evento.dia}</span>
              </div>
              <div className={styles.eventDetails}>
                <h3 className={styles.eventTitle}>{evento.titulo}</h3>
                <p>{evento.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
