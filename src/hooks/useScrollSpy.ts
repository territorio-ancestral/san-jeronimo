import { useState, useEffect } from 'react'

/**
 * Hook que detecta qué sección está visible según la posición del scroll.
 * Retorna el ID de la sección activa.
 */
export function useScrollSpy(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + 120

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (!element) continue

        const sectionTop = element.offsetTop
        const sectionHeight = element.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveId(id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  return activeId
}
