import type { SitioSagrado, InfoTerritorio } from '../types'

export const territorioTextos = [
  {
    subtitulo: 'San Jerónimo, Caldas',
    texto:
      'El territorio ancestral de San Jerónimo se encuentra en el departamento de Caldas, Colombia, una región bendecida por montañas majestuosas, ríos cristalinos y una biodiversidad inmensa. Nuestra tierra es un tapiz vivo de tradición y naturaleza.',
  },
  {
    subtitulo: 'Geografía Sagrada',
    texto:
      'Nuestras montañas son los pilares del mundo, lugares donde los espíritus habitan y donde nuestros ancestros realizaban ceremonias. Los ríos son las venas de la Madre Tierra, llevando vida y purificación a cada rincón del territorio.',
  },
  {
    subtitulo: 'Biodiversidad y Conservación',
    texto:
      'Protegemos más de 50 especies de plantas medicinales, numerosas especies de aves sagradas y mamíferos que comparten nuestro hogar. La conservación no es solo un deber, es nuestra forma de vida y nuestro legado para las futuras generaciones.',
  },
]

export const sitiosSagrados: SitioSagrado[] = [
  {
    nombre: 'La Piedra del Sol',
    descripcion: 'Marcador astronómico ancestral donde se celebran los equinoccios',
  },
  {
    nombre: 'El Manantial Eterno',
    descripcion: 'Fuente de agua pura usada en ceremonias de sanación',
  },
  {
    nombre: 'La Cueva de los Ancestros',
    descripcion: 'Lugar de meditación y conexión espiritual',
  },
  {
    nombre: 'El Árbol Milenario',
    descripcion: 'Guardián del territorio, testigo de nuestra historia',
  },
]

export const infoTerritorio: InfoTerritorio[] = [
  { etiqueta: 'Ubicación', valor: 'San Jerónimo, Caldas, Colombia' },
  { etiqueta: 'Altitud', valor: '1,200 - 2,800 msnm' },
  { etiqueta: 'Clima', valor: 'Templado de montaña' },
  { etiqueta: 'Población', valor: 'Comunidad indígena ancestral' },
  { etiqueta: 'Lengua', valor: 'Español y lengua ancestral' },
  {
    etiqueta: 'Actividades principales',
    valor: 'Agricultura ancestral, medicina tradicional, artesanías',
  },
]
