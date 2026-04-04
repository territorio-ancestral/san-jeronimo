import { useEffect } from 'react'
import { Header } from './components/Header/Header'
import { Nav } from './components/Nav/Nav'
import { Footer } from './components/Footer/Footer'
import { Inicio } from './components/sections/Inicio/Inicio'
import { Cultura } from './components/sections/Cultura/Cultura'
import { Historias } from './components/sections/Historias/Historias'
import { Tradiciones } from './components/sections/Tradiciones/Tradiciones'
import { Dichos } from './components/sections/Dichos/Dichos'
import { Musica } from './components/sections/Musica/Musica'
import { Eventos } from './components/sections/Eventos/Eventos'
import { Gastronomia } from './components/sections/Gastronomia/Gastronomia'
import { Territorio } from './components/sections/Territorio/Territorio'
import { useScrollSpy } from './hooks/useScrollSpy'

const SECTION_IDS = [
  'inicio',
  'cultura',
  'historias',
  'tradiciones',
  'dichos',
  'musica',
  'eventos',
  'gastronomia',
  'territorio',
]

export function App() {
  const activeSection = useScrollSpy(SECTION_IDS)

  // Accesibilidad: detectar navegación por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') document.body.classList.add('keyboard-navigation')
    }
    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation')
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleMouseDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  return (
    <>
      <Header />
      <Nav activeSection={activeSection} />
      <main>
        <Inicio />
        <Cultura />
        <Historias />
        <Tradiciones />
        <Dichos />
        <Musica />
        <Eventos />
        <Gastronomia />
        <Territorio />
      </main>
      <Footer />
    </>
  )
}
