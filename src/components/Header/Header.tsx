import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.headerPattern} aria-hidden="true" />
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <div className={styles.tribalCircle} aria-hidden="true">
            <span className={styles.sunSymbol}>☀</span>
          </div>
          <h1 className={styles.siteTitle}>
            Territorio Ancestral<br />San Jerónimo
          </h1>
        </div>
        <p className={styles.subtitle}>Caldas - Colombia</p>
      </div>
    </header>
  )
}
