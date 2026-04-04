import { useEffect, useRef } from 'react'

/**
 * Hook que aplica la clase 'visible' a los elementos hijos con la clase
 * 'animateOnScroll' cuando entran en el viewport.
 * Úsalo pasándole el ref del contenedor padre.
 */
export function useIntersectionObserver<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const elements = container.querySelectorAll<HTMLElement>('.animateOnScroll')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}
