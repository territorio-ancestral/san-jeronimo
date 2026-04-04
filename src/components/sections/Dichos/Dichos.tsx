import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver'
import { dichos } from '../../../data/dichos'
import { Divider } from '../../ui/Divider/Divider'
import styles from './Dichos.module.css'

export function Dichos() {
  const ref = useIntersectionObserver<HTMLElement>()

  return (
    <section id="dichos" className={styles.dichosSection} ref={ref}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Sabiduría en Palabras</h2>
        <Divider />
        <div className={styles.sayingsContainer}>
          {dichos.map((dicho) => (
            <div key={dicho.texto} className={`${styles.sayingCard} animateOnScroll`}>
              <div className={styles.quoteMark} aria-hidden="true">&quot;</div>
              <p className={styles.sayingText}>{dicho.texto}</p>
              <div className={styles.sayingFooter}>- {dicho.fuente}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
