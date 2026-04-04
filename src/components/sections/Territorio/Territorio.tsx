import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver'
import { territorioTextos, sitiosSagrados, infoTerritorio } from '../../../data/territorio'
import { Divider } from '../../ui/Divider/Divider'
import styles from './Territorio.module.css'

export function Territorio() {
  const ref = useIntersectionObserver<HTMLElement>()

  return (
    <section id="territorio" className={styles.territorioSection} ref={ref}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Nuestro Territorio Sagrado</h2>
        <Divider />
        <div className={styles.territoryContent}>
          <div className="animateOnScroll">
            {territorioTextos.map((bloque) => (
              <div key={bloque.subtitulo}>
                <h3 className={styles.territorioSubtitulo}>{bloque.subtitulo}</h3>
                <p>{bloque.texto}</p>
              </div>
            ))}
            <h3 className={styles.territorioSubtitulo}>Sitios Sagrados</h3>
            <ul className={styles.sacredSitesList}>
              {sitiosSagrados.map((sitio) => (
                <li key={sitio.nombre}>
                  <strong className={styles.siteName}>{sitio.nombre}:</strong> {sitio.descripcion}
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.infoBox} animateOnScroll`}>
            <h3 className={styles.infoBoxTitle}>Información del Territorio</h3>
            {infoTerritorio.map((info) => (
              <div key={info.etiqueta} className={styles.infoItem}>
                <strong className={styles.infoLabel}>{info.etiqueta}:</strong> {info.valor}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
