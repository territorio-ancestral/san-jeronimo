import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver'
import { historias } from '../../../data/historias'
import { Divider } from '../../ui/Divider/Divider'
import styles from './Historias.module.css'

export function Historias() {
  const ref = useIntersectionObserver<HTMLElement>()

  return (
    <section id="historias" className={styles.historiasSection} ref={ref}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Historias de Nuestros Ancestros</h2>
        <Divider />
        <div className={styles.storyContainer}>
          {historias.map((historia) => (
            <div key={historia.titulo} className={`${styles.storyBox} animateOnScroll`}>
              <h3 className={styles.storyTitle}>{historia.titulo}</h3>
              <p className={styles.storyText}>{historia.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
