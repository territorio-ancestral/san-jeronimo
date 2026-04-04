import { useState, useCallback } from 'react'
import { navItems } from '../../data/nav'
import styles from './Nav.module.css'

interface NavProps {
  activeSection: string
}

export function Nav({ activeSection }: NavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      setIsOpen(false)
      const id = href.substring(1)
      const target = document.getElementById(id)
      if (target) {
        const offsetTop = target.offsetTop - 80
        window.scrollTo({ top: offsetTop, behavior: 'smooth' })
      }
    },
    []
  )

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <nav className={styles.mainNav} aria-label="Navegación principal">
      <button
        className={styles.navToggle}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
      >
        ☰
      </button>
      <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`${styles.navLink} ${activeSection === item.href.substring(1) ? styles.active : ''}`}
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
