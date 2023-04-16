export interface navItems {
  id: number
  icon: string //fontawesome icon
  path: string
  text: {
    [index: string]: string
    en: string
    es: string
    de: string
  }
  arrow: string
  newTab: Boolean
}
