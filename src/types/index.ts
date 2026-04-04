// ===================================
// Tipos e interfaces compartidos
// Territorio Ancestral San Jerónimo
// ===================================

export interface NavItem {
  href: string
  label: string
}

export interface CardItem {
  icono: string
  titulo: string
  descripcion: string
}

export interface Historia {
  titulo: string
  texto: string
}

export interface Tradicion {
  icono: string
  titulo: string
  descripcion: string
}

export interface Dicho {
  texto: string
  fuente: string
}

export interface Instrumento {
  icono: string
  nombre: string
  descripcion: string
}

export interface Evento {
  mes: string
  dia: string
  titulo: string
  descripcion: string
}

export interface Plato {
  icono: string
  nombre: string
  descripcion: string
}

export interface SitioSagrado {
  nombre: string
  descripcion: string
}

export interface InfoTerritorio {
  etiqueta: string
  valor: string
}
