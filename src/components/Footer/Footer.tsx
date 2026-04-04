import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.footerPattern} aria-hidden="true" />
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Territorio Ancestral San Jerónimo</h3>
            <p>Guardianes de la memoria, protectores de la tierra</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Contacto</h3>
            <p>Caldas, Colombia</p>
            <p>Email: contacto@territoriosanjeronimo.org</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Síguenos</h3>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Visitar Facebook">Facebook</a>
              <a href="#" className={styles.socialLink} aria-label="Visitar Instagram">Instagram</a>
              <a href="#" className={styles.socialLink} aria-label="Visitar YouTube">YouTube</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2026 Territorio Ancestral San Jerónimo. Todos los derechos reservados.</p>
          <p className={styles.footerBlessing}>
            Que la sabiduría de nuestros ancestros ilumine tu camino
          </p>
        </div>
      </div>
    </footer>
  )
}
